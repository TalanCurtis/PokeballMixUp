import React, { Component} from 'react';
import './Card.css';
import AttackButton from '../Buttons/AttackButton'

class Card extends Component{
    constructor(props){
        super(props);
        this.state={
            id:0,
            playerName:"joe joe beean",
            pokemonName:'Pokemon',
            health:0,
            attack:0,
            image:"../../images/placeholderImage.jpg"
        }
    }

    render(){
        return(
            <div className='Card'>
                <div className='PlayerName'>{this.state.playerName}</div>
                <div className='PokemonName'>{this.state.pokemonName}</div>
                <img className='Picture' src={this.state.image} alt=""></img>
                <div className='Info'>
                    <p>Attack Power: {this.state.attack}</p>
                    <p>Health: {this.state.health}</p>
                </div>
                <AttackButton className='AttackButton'/>
            </div>
        )
    }
}

export default Card;