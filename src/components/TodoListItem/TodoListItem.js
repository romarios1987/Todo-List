import React from "react";
import './TodoListItem.css'

// Destructuring(Деструктуризация) props in TodoListItem
const TodoListItem = ({label, important = false}) => {
    const styleSpan = {
        color: important ? 'red' : 'clack'
    };
    return <span className="TodoListItem" style={styleSpan}>{label}</span>
};

export default TodoListItem;
