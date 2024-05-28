import { useRef } from "react";
import "./css/Useref.css"
let Useref=()=>{
    let inputRef=useRef();
    let hendelRef=()=>{
        inputRef.current.focus();
        inputRef.current.value="raj choudhary";
        inputRef.current.style.color="red";
        inputRef.current.style.border="none";
        inputRef.current.style.outline="none"
        setTimeout(()=>{
            inputRef.current.style.display="none";
        },1000)
       
    }
    return(
        <div className="useref">
            <h1>useRef Hooks</h1>
            {/* useref ki value ko hum props ke jeshe pass ker sakte h uske liye hame component me ref={ref}send krna pdega our fir jha pe use print krana h vha pe forwerdRef import krna pdega or use component ko forwerdref(component) pass kr ke function se perameter leke use paramiter ke name se ref={paramiter} print kra shakte h */}
        <input type="text" ref={inputRef} placeholder="enter value" />
        <button onClick={hendelRef}>Click</button>
        </div>
    );
}
export default Useref