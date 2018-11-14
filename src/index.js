import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from "./components/AppHeader/AppHeader";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import TodoList from "./components/TodoList/TodoList";

const App = () => {

    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Make Awesome App', important: false, id: 2},
        {label: 'Have a lunch', important: true, id: 3},
        {label: 'Drink Coffee', important: false, id: 4}
];
    const WrapApp ={
        minHeight: '100vh',
        paddingTop: '5%',
        background: '#9d8aec'
    };

    return (
        <div style={WrapApp}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <AppHeader/>
                        <SearchPanel/>
                        <TodoList todos={todoData}/>
                    </div>
                </div>
            </div>
        </div>
    )
};
ReactDOM.render(<App/>, document.getElementById('root'));