import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'
import carrito from '..//../img/carro-de-la-compra.png'
import logoDos from '../../img/logo-2.png'
import './NavBarr.scss'

const NavBar = () => {
 const {getApi,filterProduct,cantidadTotal} =useCartContext()

  return (
    <div>
        <nav className="navbar navbar-expand-lg fixed-top" >
  <div className="container-fluid">
   <Link to={'/'} className='link' > <a className="navbar-brand text-center" href="#"><img src={logoDos} alt="" className='logoNav' /></a> </Link> 
    <button className="navbar-toggler w-25" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu">
            <li><a onClick={()=>getApi()} className="dropdown-item" href="#">All</a></li>
            <li><a onClick={()=>filterProduct("men's clothing")} className="dropdown-item" href="#">Men</a></li>
            <li><a onClick={()=>filterProduct("women's clothing")} className="dropdown-item" href="#">Women</a></li>
            <li><a onClick={()=>filterProduct("jewelery")}  className="dropdown-item" href="#">Jewelery</a></li>
            <li><a onClick={()=>filterProduct("electronics")}  className="dropdown-item" href="#">Electronics</a></li>
          </ul>
        </li>
        <li className="nav-item">
       <Link to={'/contacts'} className='link'> <a className="nav-link ">Contact</a></Link>  
        </li>
      </ul>
      <Link to={'/cart'}>
       <div className='divLogoCarrito'>
        <span>{cantidadTotal()}</span>
        <img className='logoCarrito ' src={carrito} alt="" />
       </div>
      </Link>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar