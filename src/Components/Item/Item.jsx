import React from 'react'
import { Link } from 'react-router-dom'
import './Item.scss'
const Item = ({item}) => {
  return (
    <div className='cardMain d-flex col-md-3 col-sm-6 col-xs-6'>
  <div className="card" >
    <div className='card-img-top'>
        <img src={item.image} className="card-img " alt="{}"/>
    </div>
 <div className="card-body">
 <Link to={`/detalle/${item.id}`}>  <button className='btn btn-primary'>View Product</button></Link> 
  </div>
</div>

    </div>
  )
}

export default Item