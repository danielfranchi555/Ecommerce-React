import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import ClipLoader from "react-spinners/ClipLoader";
import Footer from '../Footer/Footer';

 
const ItemDetailContainer = () => { 

 const [product,setProduct] = useState({})
 const[loading,setLoading]= useState(true)

 const {id} = useParams()

 const getApiDetail = async ()=>{
   const data = await fetch(`https://fakestoreapi.com/products/${id}`)
   const resp = await data.json()
   setProduct(resp)
   setLoading(false)
   console.log(resp)
  }

 useEffect(()=>{
   getApiDetail() 
 },[])

  if (loading) {
  return <div className='mt-5 py-5 text-center'>
     <ClipLoader
   color={'black'}
   loading={loading}
   size={70}
  
 />
  </div>
 } 
  return (
    <div>
       <div className=' d-flex container py-5' style={{justifyContent:'center'}}>
            <ItemDetail product={product}></ItemDetail>
    </div>
    <Footer className=''></Footer>
        </div>
   
  )
} 

export default ItemDetailContainer