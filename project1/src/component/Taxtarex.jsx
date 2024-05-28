import React, { useState } from "react";
import "./css/Taxtarex.css"
let count =100;
const Textarea = () => {
  const [item, setItem] = useState(""); // Initialize item as an empty string
  const [textStyle, setTextStyle] = useState({
    color: "black", // default text color
    backgroundColor: "white", // default background color
    fontSize: "16px" // default font size
  });

  const reverseText = () => {
    // Reverse the text and update the state
    setItem(item.split("").reverse().join(""));
  };

  const toUppercase = () => {
    // Convert text to uppercase and update the state
    setItem(item.toUpperCase());
  };

  const toLowercase = () => {
    // Convert text to lowercase and update the state
    setItem(item.toLowerCase());
  };

  const removeExtraSpaces = () => {
    // Remove extra spaces and update the state
    setItem(item.replace(/\s+/g, ' '));
  };

  const clearText = () => {
    // Clear the text and update the state
    setItem("");
  };

  const countCharacters = () => {
    // Count the number of characters in the item
    
    return count-item.length;
  };

   const stylesText = () => {
    // Update the text style upon clicking the button
    
      setTextStyle({
        color: "red", // default text color
        backgroundColor: "yellow", // default background color
        fontSize: "16px" // default font size
      });
  };
  let TaxtCopy=()=>{
    // Copy text to clipboard
    navigator.clipboard.writeText(item);
  }

  return (
    <div  className="taxtparent">
      <div className="taxtbox">
        <textarea
          placeholder="Enter a value"
          value={item}
          style={textStyle} // Apply text style
          cols="50"
          rows="5"
          onChange={(e) => setItem(e.target.value)}
        ></textarea>
      </div>
      <p >{item}</p>
      <p>Character Count: {countCharacters()}</p> {/* Display character count */}
      <div>
        <button className="btn" onClick={toUppercase}>To Uppercase</button>
        <button className="btn" onClick={toLowercase}>To Lowercase</button>
        <button className="btn" onClick={clearText}>Clear</button>
        <button className="btn" onClick={removeExtraSpaces}>Remove Spaces</button>
        <button className="btn" onClick={reverseText}>Reverse</button>
        <button className="btn" onClick={stylesText}>Style</button>
        <button className="btn" onClick={TaxtCopy}>TaxtCopy</button>
      </div>
    </div>
  );
};

export default Textarea;
