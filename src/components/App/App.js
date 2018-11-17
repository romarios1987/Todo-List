import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import React, {Component} from "react";
import ItemAddForm from "../ItemAddForm/ItemAddForm";


export default class App extends Component {


    maxId = 100;

    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Make Awesome App', important: false, id: 2},
            {label: 'Have a lunch', important: true, id: 3},
            {label: 'Drink Coffee', important: false, id: 4}
        ]
    };


    // Add Item
    addItem = (text) => {
        // Generate ID
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        };

        // Add element to array
        this.setState(({todoData}) => {

            // new Array
            const newArray = [
                ...todoData, newItem
            ];
            return {
                todoData: newArray
            }

        })

    };

    // Delete Item
    deleteItem = (id) => {
        this.setState(({todoData}) => {

            // получаем индекс елемента
            const idx = todoData.findIndex((el) => el.id === id);

            //todoData.splice(idx, 1);

            // const before = todoData.slice(0, idx);
            // const after = todoData.slice(idx + 1);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            }

        })
    };


    render() {
        const WrapApp = {
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
                            <TodoList
                                todos={this.state.todoData}
                                onDeleted={this.deleteItem}
                            />
                            <ItemAddForm onItemAdded={this.addItem}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
