import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import React, {Component} from "react";
import ItemAddForm from "../ItemAddForm/ItemAddForm";


export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch'),
        ],
        term: '',
        filter: 'all' // active, all, done
    };

    createTodoItem(label) {
        return {
            label: label,
            important: false,
            done: false,
            id: this.maxId++
        };
    }

    // Add Item
    addItem = (text) => {
        // Generate ID
        const newItem = this.createTodoItem(text);

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


    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        };

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];

    }


    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    };


    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    };

    search(items, term) {

        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label
                .toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }

    onSearchChange = (term) => {
        this.setState({term})
    };



    filter(items, filter){
        switch (filter) {
            case 'all':
                return items;
            case 'active' :
                return items.filter((item) =>!item.done);
            case 'done' :
                return items.filter((item) =>item.done);
            default:
                return items;
        }
    }

    onFilterChange = (filter)=>{
        this.setState({filter})
    };

    render() {
        const WrapApp = {
            minHeight: '100vh',
            paddingTop: '5%',
            background: '#9d8aec'
        };

        const {todoData, term, filter} = this.state;
        const visibleItems = this.filter(this.search(todoData, term), filter);

        const doneCount = todoData.filter((el) => el.done).length;

        const todoCount = todoData.length - doneCount;

        return (
            <div style={WrapApp}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <AppHeader/>
                            <SearchPanel
                                toDo={todoCount}
                                done={doneCount}
                                onSearchChange={this.onSearchChange}
                                filter={filter}
                                onFilterChange={this.onFilterChange}
                            />
                            <TodoList
                                todos={visibleItems}
                                onDeleted={this.deleteItem}
                                onToggleImportant={this.onToggleImportant}
                                onToggleDone={this.onToggleDone}
                            />
                            <ItemAddForm onItemAdded={this.addItem}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
