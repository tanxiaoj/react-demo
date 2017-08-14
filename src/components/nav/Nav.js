import React, {Component} from 'react';

export default class Nav extends Component{
    render() {
        return (
            <div className="ui menu">
                <div className="header item">Nodes</div>
                <div className="item">Home</div>
                <div className="item">List</div>
            </div>
        )
    }
}