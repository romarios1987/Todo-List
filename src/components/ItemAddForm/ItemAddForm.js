import React, {Component} from "react";
import './ItemAddForm.css';

export default class ItemAddForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value.toUpperCase()
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    })
  };

  render() {
    return (
          <form className="ItemAddForm d-flex"
                onSubmit={this.onSubmit}>
            <input
                  type="text"
                  className='form-control'
                  onChange={this.onLabelChange}
                  placeholder='What needs to be done'
                  value={this.state.label}
            />
            <button className='btn btn-success'>Add Item</button>
          </form>
    )
  }
}