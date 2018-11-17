import React, {Component} from "react";
import './TodoListItem.css'


export default class TodoListItem extends Component {

    // constructor() {
    //     super();
    //     this.onLabelClick = () => {
    //         console.log(`Done: ${this.props.label}`)
    //     };
    // }


    state = {
        done: false,
        important: false
    };

    onLabelClick = () => {
        this.setState({
            done: true
        });
        console.log(`Done: ${this.props.label}`)
    };

    onMarkImportant = () => {
        this.setState({
            important: true
        });
    };


    render() {

        const {label} = this.props;
        const {done, important} = this.state;

        let className = 'TodoListItem d-flex justify-content-between align-items-center';
        if (done) {
            className += ' done'
        }
        if (important) {
            className += ' important'
        }

        return (
            <span className={className}>
                <span onClick={this.onLabelClick}>{label}</span>
                <span>
                    <button type="button" className="btn btn-outline-danger">
                        <i className="far fa-trash-alt"/>
                    </button>
                    <button type="button" className="btn btn-outline-success" onClick={this.onMarkImportant}>
                        <i className="far fa-star"/>
                    </button>
                </span>
            </span>


        )
    }
}