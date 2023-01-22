import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  /*   ESTADOS */
  const [cartList, setCartList] = useState([]);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(true);

  /* FUNCIONES */

  const getApi = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const resp = await data.json();
    setData(resp);
    setFilter(resp);
    setLoading(false);
    console.log(resp);
  };

  useEffect(() => {
    getApi();
  }, []);

  /* FUNCION PARA FILTRAR LOS PRODUCTOS  */
  const filterProduct = (category) => {
    const updateList = data.filter((product) => product.category === category);
    setFilter(updateList);
    setLoading(false);
  };

  const agregarCarrito = (prod) => {
    const idx = cartList.findIndex((producto) => producto.id == prod.id);
    if (idx !== -1) {
      let cant = cartList[idx].quantity;
      cartList[idx].quantity = cant + prod.quantity;
      setCartList([...prod]);
    } else setCartList([...cartList, prod]);
  };

  const deleteProd = (id) => {
    setCartList(cartList.filter((producto) => producto.id != id));
  };
  const precioTotal = () => {
    const precioTotal = cartList.reduce(
      (acumPrecio, prodObject) =>
        (acumPrecio = acumPrecio + prodObject.price * prodObject.quantity),
      0
    );

    return precioTotal.toFixed(3);
  };

  const cantidadTotal = () => {
    return cartList.reduce(
      (contador, produObject) => (contador += produObject.quantity),
      0
    );
  };

  const vaciarCarrito = () => {
    setCartList([]);
  };
  return (
    <>
      <CartContext.Provider
        value={{
          data,
          filter,
          cartList,
          loading,
          getApi,
          filterProduct,
          agregarCarrito,
          deleteProd,
          precioTotal,
          vaciarCarrito,
          cantidadTotal,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};
