import React, { useState } from 'react';
function Calculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);


    const handleCalculate = () => {
        setResult(Number(num1) + Number(num2));
    };
    const substract = () => {
        setResult(Number(num1) - Number(num2));
    }
    const multiply = () => {
        setResult(Number(num1) * Number(num2));
    }
    const divide = () => {
        setResult(Number(num1) / Number(num2));
    }   

    return (
        <div>
            <input 
                type="number" 
                value={num1} 
                onChange={(e) => setNum1(e.target.value)} 
            />
            <input 
                type="number" 
                value={num2} 
                onChange={(e) => setNum2(e.target.value)} 
            />
            <button onClick={handleCalculate}>+</button>
            <button onClick={substract}>-</button>
            <button onClick={multiply}>*</button>
            <button onClick={divide}>/</button>
            <button onClick={() => setResult(0)}>Clear</button>

            <p>Result: {result}</p>
        </div>
    );
}
export default Calculator;