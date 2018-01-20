import React, { Component} from 'react';
import './Card.css';
import AttackButton from '../Buttons/AttackButton';
import axios from 'axios';

class Card extends Component{
    constructor(props){
        super(props);
        this.state={
            id:Math.floor(Math.random()*400+1),
            playerName:"joe joe beean",
            pokemonName:'Pokemon',
            health:0,
            attack:0,
            image:""
        }
    }

    componentDidMount(){
        axios.get(`http://pokeapi.co/api/v2/pokemon/${this.state.id}`)
        .then( res => {
          console.log(res);
          let attack = 0,
              health = 0

          for (let index in res.data.stats){
              //console.log(res.data.stats[index].stat.name)
              if(res.data.stats[index].stat.name === "attack"){
                //console.log(res.data.stats[index].base_stat)
                attack = res.data.stats[index].base_stat
              }else if(res.data.stats[index].stat.name === "hp"){
                health = res.data.stats[index].base_stat
              }
          }

          this.setState({
              pokemonName: res.data.forms[0].name,
              attack: attack,
              health: health,
              image: res.data.sprites.front_default
          })
        })
      }

      handleAttack(playerAttack, enemyHealth){
          // get enemy component
          //subtract player attack from enemyHealth
          // set state // on both components.
          console.log('I attacked');
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
                <AttackButton className='AttackButton' onClick={()=>{this.handleAttack(10, 50)}}/>
            </div>
        )
    }
}

export default Card;