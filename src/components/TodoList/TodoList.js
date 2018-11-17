import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import './TodoList.css'

const TodoList = ({todos}) => {

    const elements = todos.map((item) => {

        // получаем из item id
        // в itemProps все свойства кроме id
        const {id, ...itemProps} = item;

        return (
            <li key={item.id} className="list-group-item">
                <TodoListItem
                    {...itemProps}
                    // label={item.label}
                    // important={item.important}
                />
            </li>
        )
    });
    return (
        <>
            <ul className="list-group TodoList">
                {elements}
            </ul>
        </>
    )
};
export default TodoList;