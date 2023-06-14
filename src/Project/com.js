
import React from "react";
  function Display(props) {
      return (
        <div className="container"> 
        <div className="item">
           <h1>{props.imgname}</h1>
            <img
             src={props.imgsrc}
            />
            <a href={props.imglink}><button>Visit</button></a>
        </div>
     </div>
      );
        
  }        
  
export default Display; 
