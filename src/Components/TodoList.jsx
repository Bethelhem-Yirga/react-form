import React from 'react';

const TodoList = () => {
    const todos = [
        { id: 1, text: 'Learn React' },
        { id: 2, text: 'Build a project' },
        { id: 3, text: 'Review concepts' },
    ];

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    );
};

export default TodoList;