import React, {Component} from "react";
import './SearchPanel.css';

export default class SearchPanel extends Component {

    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };


    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];

    render() {


        const {filter, onFilterChange} = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const cls = isActive ? 'btn-success' : '';
            return (
                <button type="button"
                        key={name}
                        className={`btn ${cls}`}
                        onClick={() => onFilterChange(name)}>
                    {label}
                </button>
            )
        });

        const {toDo, done} = this.props;
        return (
            <div className='d-flex flex-column m-auto'>
                <input className="SearchPanel form-control" type="text" placeholder={'Search'} value={this.state.term}
                       onChange={this.onSearchChange}/>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="btn-group">
                        {buttons}
                    </div>
                    <span style={{fontWeight: '500'}}>{toDo} more to do, {done} done</span>
                </div>
            </div>
        )
    }
}
