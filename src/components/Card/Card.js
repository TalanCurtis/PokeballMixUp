import React, { Component} from 'react';
import './Card.css';

class Card extends Component{
    //constructor(){}
    dismiss(){
        this.props.unmountMe();
    }

    render(){
        return(
            <div className='Card'>
                Card
            </div>
        )
    }
}

export default Card;