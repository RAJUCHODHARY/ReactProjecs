import React,{useReducer} from "react";
import "./css/Usereducer.css"
let initialstate=0;
let reducer=(state,action)=>{
switch(action){
    case "increment":
        return state+1;
    case "decrement":
        return state-1;
    case "multiplai":
        return state * 2;
    case "modulas":
        return state / 2;
    case "remender":
        return state % 2;
    default :
    return state;
}
}
let Usereducer=()=>{
    let [count,dispatch]=useReducer(reducer,initialstate)
return(
<>
<h2>useReducer Hook </h2>
<div className="box">
    
    <div className="count">{count}</div>
    <button onClick={()=>dispatch("increment")}>+</button>
    <button onClick={()=>dispatch("decrement")}>-</button>
    <button onClick={()=>dispatch("multiplai")}>*</button>
    <button onClick={()=>dispatch("modulas")}>/</button>
    <button onClick={()=>dispatch("remender")}>%</button>


</div>
</>
);

}
export default Usereducer