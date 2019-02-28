import React, {Component} from "react";
import './TodoListItem.css'

export default class TodoListItem extends Component {

  render() {
    const {
      label,
      onDeleted,
      onToggleDone,
      onToggleImportant,
      important,
      done
    } = this.props;

    let className = 'TodoListItem d-flex justify-content-between align-items-center';
    if (done) {
      className += ' done'
    }
    if (important) {
      className += ' important'
    }

    return (
          <span className={className}>
                <span onClick={onToggleDone}>
                    {label}
                    </span>
                <span>
                    <button type="button" className="btn btn-outline-danger" onClick={onDeleted}>
                        <i className="far fa-trash-alt"/>
                    </button>
                    <button type="button" className="btn btn-outline-success" onClick={onToggleImportant}>
                        <i className="far fa-star"/>
                    </button>
                </span>
            </span>
    )
  }
}