import React, { useState } from 'react';

function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleCalculate = () => {
        if (num1 === '' || num2 === '') {
            setError('Please enter both numbers.');
            return;
        }
        setError('');
        setResult(Number(num1) + Number(num2));
    };

    const subtract = () => {
        if (num1 === '' || num2 === '') {
            setError('Please enter both numbers.');
            return;
        }
        setError('');
        setResult(Number(num1) - Number(num2));
    };

    const multiply = () => {
        if (num1 === '' || num2 === '') {
            setError('Please enter both numbers.');
            return;
        }
        setError('');
        setResult(Number(num1) * Number(num2));
    };

    const divide = () => {
        if (num1 === '' || num2 === '') {
            setError('Please enter both numbers.');
            return;
        }
        if (Number(num2) === 0) {
            setError('Cannot divide by zero.');
            return;
        }
        setError('');
        setResult(Number(num1) / Number(num2));
    };

    const clear = () => {
        setNum1('');
        setNum2('');
        setResult(null);
        setError('');
    };

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
            <button onClick={subtract}>-</button>
            <button onClick={multiply}>*</button>
            <button onClick={divide}>/</button>
            <button onClick={clear}>Clear</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {result !== null && <p>Result: {result}</p>}
        </div>
    );
}

export default Calculator;