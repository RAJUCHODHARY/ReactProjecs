import React, { useState } from 'react';
import "./css/ArrayReverser.css"

function ReverseArrayPrint() {
    const [inputValue, setInputValue] = useState('');
    const [arrays, setArrays] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        pera.innerHTML=arrays;
        setArrays([...arrays, inputValue]);
        
        setInputValue('');
    };

    const handleReverseArray = () => {
        const reversed = [...arrays].reverse();
        setArrays(reversed);
        pera.innerHTML="";
        let index = 0;
        const interval = setInterval(() => {
            if (index === reversed.length) clearInterval(interval);
            else {
                pera.innerHTML += reversed[index] + ' ';
                index++;
            }
        }, 1000);
    };

    return (
        <div className='arrayrev'>
            <input type="text" value={inputValue} onChange={handleInputChange}  placeholder='add array value'/><br />
            <p id="pera"></p>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleReverseArray}>ReversePrint</button>
        </div>
    );
}

export default ReverseArrayPrint;
