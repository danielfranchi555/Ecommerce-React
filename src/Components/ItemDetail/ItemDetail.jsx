import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import swal from 'sweetalert';
import './ItemDetail.scss'
const ItemDetail = ({product}) => {
            
const {agregarCarrito,cartList}= useCartContext() 



const swetAlert = ()=>{
  swal({
    title: "Added to cart!",
  });

}

const onAdd = (quantity)=>{
  agregarCarrito({...product,quantity})
  swetAlert()
}
console.log(cartList)

  return (
<div className=' d-flex row mainDetail py-5 mt-5 border border-solid rowDetail'>
<div className=" d-flex col-md-6" style={{justifyContent:'center'}}>
<img src={product.image} alt=""  className='imgDetail'/>
</div>
<div className=" text-center col-md-6">
  <div className='infoDetail'>
  <h2>{product.title}</h2>
  <span className='spanDescription'>{product.description}</span>
  </div>
  <div className=' d-flex itemCount' style={{justifyContent:'space-around',alignItems:'center'}}>
    <div className=' spanPrice'>{product.price}$</div>
    <ItemCount initial={1}stock={5} onAdd={onAdd}></ItemCount>
  </div>
  
</div>


 

 </div>
 
  )
}

export default ItemDetail