import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function InputWithError
({holder, value, action, type, error }) {

const [isPasswordShown, setIsPasswordShown] = useState(false);

function togglePasswordShow(){
  setIsPasswordShown( !isPasswordShown);
}

  return (
    <div>

      <div 
      style={{ 
      backgroundColor:"rgb(210,210,210)",
      padding: "10px",
      borderBottom: `solid 2px ${
        error === "" 
        ? "royalblue" 
        : "red"}`,
      display: "flex",
      flexDirection: "row",

      }}
    
    >
      <input 
    style={{ 
      border:"none", 
      width:"90%", 
      backgroundColor: "transparent", 
      color: error === "" ? "black" : "red",
    }}
    placeholder={holder} 
    value={value}
    onChange={action}
    type={
      type !== "password"
       ? type 
       : isPasswordShown 
       ? "text" 
       : "password"
       } 
       />
      {type === "password" &&
        (isPasswordShown ? (
          <FaEye 
          color='orange' size={15} onClick={togglePasswordShow} />
        ) : (
          <FaEyeSlash
            color='grey'
            size={15}
            onClick={togglePasswordShow}
          />
        ))}


      </div>

    <p style={{ color: "red", fontSize:"12px"}}>{error}</p>
    
    </div>
    
  )
}
