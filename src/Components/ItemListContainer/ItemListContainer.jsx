import  { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Slider from "../Slider/Slider";
import ClipLoader from "react-spinners/ClipLoader";
import { useCartContext } from "../Context/CartContext";
import Footer from "../Footer/Footer";
import './ItemListContainer.scss'

const ItemListContainer = () => {
  const { filter, loading } = useCartContext();

  if (loading) {
    return (
      <div className="text-center mt-5 py-5">
        <ClipLoader color={"black"} loading={loading} size={70} />
      </div>
    );
  }

  return (
    <div>
      <Slider></Slider>
      <div>
         <h1 className="text-center" style={{ fontFamily: '"Bentham", serif' }}>
          Latest Products
        </h1>
      </div>
      <div
        className="container containerItemListContainer"
      >  
        <ItemList loading={loading} filter={filter}></ItemList>
      </div>
      <Footer ></Footer>
    </div>
  );
};

export default ItemListContainer;
