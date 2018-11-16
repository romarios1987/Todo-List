import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import './TodoList.css'

const TodoList = ({todos}) => {

    const elements = todos.map((item) => {

        // получаем из item id
        // в itemProps все свойства кроме id
        const {id, ...itemProps} = item;

        return (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <TodoListItem
                    {...itemProps}
                    // label={item.label}
                    // important={item.important}
                />

                <div>
                    <button type="button" className="btn btn-outline-danger">
                        <i className="far fa-trash-alt"/>
                    </button>
                    <button type="button" className="btn btn-outline-success">
                        <i className="far fa-star"/>
                    </button>
                </div>
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