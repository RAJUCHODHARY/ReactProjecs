import React, { useState } from "react";
import "./css/LoginSign.css"
let LoginSign=()=>{
    const [Action,SetAction]=useState("Sing up");
    return (
      <div>
        <div className="contaner">
            <div className="header">
                <div className="text">{Action}</div>
                <div  className="underline"></div>
            </div>
            <div className="inputs">
               
                {
                  Action==="Login"?<div></div>:<div className="input"> <input type="text" placeholder="Name"/> </div>
                }
               
              
               <div className="input">
                <input type="email" placeholder="Email"/>
               </div>
               <div className="input">
                <input type="password" placeholder="Password" />
               </div>
            </div>
            { Action==="Sing up"? <div></div>:<div className="forget-password">Lost-Password? <span>Click Here!</span></div>}
            
            <div className="submit-contenor">
                <div className={Action==="Login"?"submit gray":"submit"} onClick={()=>{SetAction("Sing up")}}>sign-up</div>
                <div className={Action==="Sing up"?"submit gray":"submit"} onClick={()=>{SetAction("Login")}}>Login</div>
            </div>
        </div>
      </div>)
}

export default LoginSign