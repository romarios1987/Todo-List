import React from "react";


// Destructuring(Деструктуризация) props in TodoListItem
const TodoListItem = ({label, important = false}) => {

    const styleSpan = {
        color: important ? 'red' : 'clack'
    };

    return <span style={styleSpan}>{label}</span>


};

export default TodoListItem;
