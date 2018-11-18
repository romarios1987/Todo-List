import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import './TodoList.css'

const TodoList = ({todos, onDeleted, onToggleDone, onToggleImportant}) => {

    const elements = todos.map((item) => {

        // получаем из item id
        // в itemProps все свойства кроме id
        const {id, ...itemProps} = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                    {...itemProps}
                    onDeleted={()=>onDeleted(id)}
                    onToggleDone={()=>onToggleDone(id)}
                    onToggleImportant={()=>onToggleImportant(id)}
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