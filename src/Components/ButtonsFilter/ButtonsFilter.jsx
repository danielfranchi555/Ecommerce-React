import React from 'react'
import './ButtonsFilter.scss'
const ButtonsFilter = ({filterProduct,getApi}) => {
  return (
    <div className=''>
  <div className='containerButtons text-center'>
  <div className='divButtons'><button className='button-60' onClick={()=>getApi()}>all</button>  </div>
  <div className='divButtons'><button className='button-60' onClick={()=>filterProduct("men's clothing")}>Men</button>  </div>
  <div className='divButtons'><button className='button-60' onClick={()=>filterProduct("women's clothing")}>Women</button>  </div>
  <div className='divButtons'><button className='button-60' onClick={()=>filterProduct("jewelery")}>jewelery</button>  </div>
  <div className='divButtons'><button className='button-60' onClick={()=>filterProduct("electronics")}>electronics</button>  </div>
    </div>
    </div>
  )
}

export default ButtonsFilter