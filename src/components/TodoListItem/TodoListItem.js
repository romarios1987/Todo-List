import React, {Component} from "react";
import './TodoListItem.css'


export default class TodoListItem extends Component {
    render() {

        const {label, important = false} = this.props;

        const styleSpan = {
            color: important ? 'red' : 'clack'
        };
        return <span className="TodoListItem" style={styleSpan}>{label}</span>
    }
}