import React, {useState} from 'react'

const Toggle = () => {
    const[toggle,setToggle]=useState(true);
    
  return (
    <div style={{margin:"1rem",background:"pink",padding:"1rem"}}>
      
      {toggle &&(
        <p>loreUt erat justo consetetur dolores sed magna at takimata, ipsum clita nonumy vero sit clita sadipscing diam amet ipsum. Et et lorem lorem et. Eirmod gubergren dolor vero tempor. Invidunt gubergren accusam amet accusam vero, tempor gubergren aliquyam no sea aliquyam dolor elitr et, eirmod elitr duo sanctus et rebum.m</p>
      )}

      <div style={{textAlign:"center"}}>
        <button onClick={()=>{setToggle(!toggle)}}>{toggle ? "Hide" : "Show"}</button>
       
      </div>
    </div>
  )
}

export default Toggle
