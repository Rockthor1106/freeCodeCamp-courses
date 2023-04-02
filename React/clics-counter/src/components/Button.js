import React from "react";
import "../css/Button.css";

function Button({ text, clicButton, handleClic }) { //This is an example of destructuring syntax in react
  return (
    <button
      className={clicButton ? "button-clic" : "button-reset"} //This is an example of ternary operator in react
      onClick={handleClic}> 
      {text}
    </button>
  );
}

export default Button;  