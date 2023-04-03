import React from "react";
import '../css/Button.css'

function Button(props) {

  const operator = val => { 
    return isNaN(val) && (val !== ".") && (val !== "=");
  };

  return(
    <div 
      className={`button-container ${operator(props.children) ? 'operator' : null}`.trimEnd()}
      onClick={() => props.handleClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Button;