import React, { Component } from 'react';


class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        }
        this.buttons = [
            {name: 'all', label: 'Все'},
            { name: 'like', label: 'Понравилось'}
        ]
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
    }

    onUpdateSearch(evt) {
        const term = evt.target.value
        this.setState({term});
        this.props.onUpdateSearch(term)
    }

    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            const classes = active ? 'btn-info':'btn-outline-secondary'
            return (
                <button onClick={() => this.props.onFilterSelect(name)} key={name} type="button" className={`'btn ${classes}`}>{label}</button>
            )
        })
        return (
            <div className="d-flex justify-content-between align-items-center">
                <input type="search" onChange={this.onUpdateSearch} className="form-control mr-2" />
                <div className="btn-group p-0" role="group">
                    {buttons}
                </div>
            </div>
        )
    }
}


export default SearchPanel;