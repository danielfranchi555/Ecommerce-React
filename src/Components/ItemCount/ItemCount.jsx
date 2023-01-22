import React, { useState } from "react";
import "./ItemCount.scss";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const decremento = () => {
    setCount(count - 1);
  };
  const incremento = () => {
    setCount(count + 1);
  };

  return (
   <div className="d-flex" style={{justifyContent:'center',alignItems:'center'}}>

      <div className=" d-flex">
      <div className="px-2"><button className="btn btn-success btnCount " onClick={incremento}><span >+</span></button></div>
      <div> <span style={{fontSize:'20px'}}>{count}</span></div>
      <div className="px-2"><button className="btn btn-success btnCount" onClick={decremento}><span>-</span></button></div>
      </div>
     
     <div>
     <button className="btn btn-primary" onClick={()=>onAdd(count)}>Add to Cart</button>
     </div>
   </div>
  );
};

export default ItemCount;
