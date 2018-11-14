import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";

const App = () => {

    const todoData = [
        {label: 'Drink Coffee', important: false},
        {label: 'Make Awesome App', important: false},
        {label: 'Have a lunch', important: true}
    ];


    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos={todoData}/>
        </div>
    )
};
ReactDOM.render(<App/>, document.getElementById('root'));