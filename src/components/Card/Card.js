import React, { Component} from 'react';
import './Card.css';

class Card extends Component{
    // constructor(props){
    //     super(props)
    // }
    dismiss(){
        this.props.unmountMe();
    }

    render(){
        return(
            <div className='Card'>
                <div className='PokemonName'>{this.props.pokemonName}</div>
                <img className='Picture' src={this.props.image} alt=""></img>
                <div className='Info'>
                    <p>Attack Power: {this.props.attack}</p>
                    <p>Health: {this.props.health}</p>
                </div>
                <button className="AttackButton" onClick={this.props.attackButton}>Attack</button>
            </div>
        )
    }
}

export default Card;