import React, {Component} from 'react';
import Card from 'card/Card.js';


export default class CardWrap extends Component{
    render() {
        //let data = this.props.data
        let { data } = this.props;
        let cards = data.map((e,i)=>{
            return (
                <Card key = {i} {...e}></Card>
            )
        });
        return (
            <div className="ui warp">
                { cards }
            </div>
        )
    }
}