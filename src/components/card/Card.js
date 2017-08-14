import React, {Component} from 'react';
import PropTypes from 'prop-types';

let propTypes = {
    number : PropTypes.number ,
    name : PropTypes.string.isRequired , //值不能是undefined
    url : PropTypes.string ,
}

export default class Card extends Component{
    render() {
        let { number ,name ,url } = this.props ;
        return (
            <div className="ui card">
                <div className="name">
                    <span>编号：</span>
                    <em>{ number }</em>
                    <span>名字：</span>
                    <em>{ name }</em>
                    <span>图片：</span>
                    <em>{ url }</em>
                </div>
            </div>
        )
    }
}

//设置默认属性值
Card.defaultProps = {
    name: 'Stranger'
};

Card.propTypes = propTypes ;