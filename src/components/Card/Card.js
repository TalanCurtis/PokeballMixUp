import React from 'react';
import './Card.css';

function Card (props){

        return(
            <div className='Card'>
                <div className='PokemonName'>{props.pokemonName}</div>
                <img className='Picture' src={props.image} alt=""></img>
                <div className='Info'>
                    <p>Attack Power: {props.attack}</p>
                    <p>Health: {props.health}</p>
                </div>
                {props.define==='player'?
                <button className="AttackButton" onClick={props.attackButton}>Attack</button>
                :
                <p>Enemy Auto Attack</p>
                }
            </div>
        )
}
//<button className="AttackButton" onClick={props.attackButton}>Attack</button>

export default Card;