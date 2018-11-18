import React, {Component} from "react";
import './SearchPanel.css';

export default class SearchPanel extends Component {

    render() {
        console.log(this.props);

        const {toDo, done} = this.props;
        return (
            <div className='d-flex flex-column m-auto'>
                <input className="SearchPanel form-control" type="text" placeholder={'Search'}/>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="btn-group">
                        <button type="button" className="btn btn-success">All</button>
                        <button type="button" className="btn btn-light">Active</button>
                        <button type="button" className="btn btn-light">Done</button>
                    </div>
                    <span style={{fontWeight: '500'}}>{toDo} more to do, {done} done</span>
                </div>
            </div>
        )
    }
}
