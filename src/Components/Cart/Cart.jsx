import React from "react";
import { useCartContext } from "../Context/CartContext";
import "./Cart.scss";
import swal from "sweetalert";

export const Cart = () => {
  const { cartList, vaciarCarrito, deleteProd, precioTotal } = useCartContext();

  console.log(cartList);

  const FinalizarCompra = () => {
    vaciarCarrito()
    swal({
      icon: "success",
      title:'Muchas gracias por su compra',
      button: "Aceptar!",
    });
    
  };

  if (cartList.length == 0) {
    return (
      <h1 className="text-center mt-5 py-5" style={{fontFamily:'-moz-initial'}}>Empty Cart</h1>
    );
  }

  return (
    <div className="containerCart container mt-5 py-5">
      <h1 className="Title-cart mt-2 py-2">Shopping Cart</h1>
      <div className="mainCart">
      <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">item</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Subtotal</th>
    </tr>
  </thead>
  <tbody>
    {cartList.map((item)=>(
       <tr>
      <th scope="row">
     <div className="div-Image">
     <img src={item.image} alt="" className="" style={{width:'110px',height:'130px'}}/>
     </div> 
     <div className="Btn-Delete">
       <button className="btn btn-danger w-100" onClick={()=>deleteProd(item.id)}>
      Delete
      </button> 
     </div>
     </th>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>$ {item.price * item.quantity}</td>
    </tr>
    ))}
   
  </tbody>
</table>
      </div>
      <div className="div-Checkout">
        <div className=" px-3">
          <span className="precioTotal">
            {precioTotal() != 0 && <p>Total Price:<span> ${precioTotal()}</span></p>}
          </span>
        </div>
        <div className="">
          <button className="btn btn-primary" onClick={FinalizarCompra}>
            Checkout
          </button>
        </div>
      </div>

      <div className="text-center">
        <button className="btn btn-dark  btn-delete-All-Cart" onClick={vaciarCarrito}>
          Empty cart
        </button>
      </div>
    </div>
  );
};
