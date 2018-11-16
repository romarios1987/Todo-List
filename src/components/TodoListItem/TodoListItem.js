import React, {Component} from "react";
import './TodoListItem.css'


export default class TodoListItem extends Component {

    // constructor() {
    //     super();
    //     this.onLabelClick = () => {
    //         console.log(`Done: ${this.props.label}`)
    //     };
    // }

    onLabelClick = () => {
        console.log(`Done: ${this.props.label}`)
    };

    render() {

        const {label, important = false} = this.props;

        const styleSpan = {
            color: important ? 'red' : 'clack',
            fontWeight: important ? '500' : 'normal'
        };
        return (
            <span className="TodoListItem" style={styleSpan}
                  onClick={this.onLabelClick}>
                {label}
            </span>
        )
    }
}