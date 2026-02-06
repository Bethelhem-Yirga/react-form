import React, { useState } from 'react';
function Todo({ task, completed }) {
    const [isCompleted, setIsCompleted] = useState(false);
    const [text, setText] = useState(task);

    
  return (
        <div>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
            />
            <input 
                type="checkbox" 
                checked={isCompleted} 
                onChange={() => setIsCompleted(!isCompleted)} 
            />
            <label>{isCompleted ? 'Completed' : 'Pending'}</label>
        </div>
    );
}
export default Todo;