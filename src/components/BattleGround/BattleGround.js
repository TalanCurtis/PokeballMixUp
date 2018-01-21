import React, {Component} from 'react';
import './BattleGround.css';
import axios from 'axios';
import Card from '../Card/Card'
import NamePanel from '../NamePanel/NamePanel'
import LeaderBoard from '../LeaderBoard/LeaderBoard'

class BattleGround extends Component{
    constructor(props){
        super(props);
        this.state={
            player:{
                name:"",
                pokeId:0,
                pokemonName:"placeholder name",
                image:"placeholder image",
                health: 0,
                attack: 0,
                lifes: 3,
                score:0,
            },
            opponent: {
                name:"",
                pokeId:"",
                pokemonName:" opp placholder name",
                image:"opp placeholder image",
                health:0,
                attack:0,
            },
            renderCardPlayer: false,
            renderCardOpponent: false,
            renderLeaderBoard: false,
            renderNamePanel: true,
        }
        this.handleNamePanelUnmount = this.handleNamePanelUnmount.bind(this)
        this.handleLeaderBoardUnmount = this.handleLeaderBoardUnmount.bind(this)
        this.handleCardPlayerUnmount = this.handleCardPlayerUnmount.bind(this)
        this.handleCardOpponentUnmount = this.handleCardOpponentUnmount.bind(this)
        //this.handleNamePanelSubmit = this.handleNamePanelSubmit.bind(this)
    }

    

    handleNamePanelUnmount(){
        if (this.state.renderNamePanel === true){
            //Start Game
            // let copy = Object.assign({}, this.state.player)
            // copy.name = userInput;
            this.setState({renderNamePanel: false})
            this.handleCardPlayerUnmount()
            this.handleCardOpponentUnmount()
        }else if(this.state.renderNamePanel === false){
            this.setState({
                renderNamePanel: true,
                renderCardPlayer: false,
                renderCardOpponent: false,
                renderLeaderBoard: false,
            })
        }
    }
    handleCardPlayerUnmount(){
        if (this.state.renderCardPlayer=== true){
            this.setState({renderCardPlayer:false})
        }else if(this.state.renderCardPlayer=== false){
            let copy = Object.assign({}, this.state.player)
            let attack = 0,
                health = 0,
                pokemonName="",
                pokeId=Math.floor(Math.random()*400+1),
                image=""

            axios.get(`http://pokeapi.co/api/v2/pokemon/${pokeId}`)
            .then( res => {
            console.log(res);
            for (let index in res.data.stats){
                //console.log(res.data.stats[index].stat.name)
                if(res.data.stats[index].stat.name === "attack"){
                    //console.log(res.data.stats[index].base_stat)
                    attack = res.data.stats[index].base_stat
                }else if(res.data.stats[index].stat.name === "hp"){
                    health = res.data.stats[index].base_stat
                }
            }
            copy.attack = attack;
            copy.health = health;
            copy.pokemonName= res.data.forms[0].name
            copy.image= res.data.sprites.front_default
            this.setState({
                player: copy
            })
        })
        this.setState({renderCardPlayer:true})
        }
    }
    handleCardOpponentUnmount(){
        if (this.state.renderCardOpponent=== true){
            this.setState({renderCardOpponent:false})
        }else if(this.state.renderCardOpponent=== false){
            let copy = Object.assign({}, this.state.opponent)
            let attack = 0,
                health = 0,
                pokemonName="",
                pokeId=Math.floor(Math.random()*400+1),
                image=""

            axios.get(`http://pokeapi.co/api/v2/pokemon/${pokeId}`)
            .then( res => {
            console.log(res);
            for (let index in res.data.stats){
                //console.log(res.data.stats[index].stat.name)
                if(res.data.stats[index].stat.name === "attack"){
                    //console.log(res.data.stats[index].base_stat)
                    attack = res.data.stats[index].base_stat
                }else if(res.data.stats[index].stat.name === "hp"){
                    health = res.data.stats[index].base_stat
                }
            }
            copy.attack = attack;
            copy.health = health;
            copy.pokemonName= res.data.forms[0].name
            copy.image= res.data.sprites.front_default
            this.setState({
                opponent: copy
            })
        })
        this.setState({renderCardOpponent:true})

        }
    }
    handleLeaderBoardUnmount(){
        if (this.state.renderLeaderBoard=== true){
                this.setState({
                    renderLeaderBoard:false,
                })
        }else if(this.state.renderLeaderBoard=== false){
            this.setState({
                renderCardPlayer: false,
                renderCardOpponent: false,
                renderLeaderBoard:true,
                renderNamePanel: false,
            })
        }
    }
    // handleChange(val){
    //     let copyPlayer = Object.assign({},this.state.player.name=val)
    //     this.setState({copyPlayer});
    // }
    // handleNamePanelSubmit(){
    //     this.setState({renderNamePanel: false})
    // }

    handleChange(val){
        let copy = Object.assign({}, this.state.player)
        copy.name = val
        this.setState({player:copy});
    }

    render(){
        return(
            <div className="BattleGround">
                <div className="TopBar">
                    <div className="PlayerName">{this.state.player.name}</div>
                    <div className="OpponentsBeat">Number of Opponents Beat</div>
                    <div className="OpponentName">OpponentName</div>
                </div>
                <div className="Table">
                    {this.state.renderNamePanel?<div>
                        <div>Hey kid wake up! whats your name?
                            <input 
                                placeholder="Enter name"
                                onChange={(e)=> this.handleChange(e.target.value)}
                            ></input>
                        </div>
                        <NamePanel 
                        unmountMe={this.handleNamePanelUnmount}
                        start={this.handleNamePanelUnmount}
                    /></div>: null}
                    {this.state.renderLeaderBoard?<LeaderBoard unmountMe={this.handleLeaderBoardUnmount}/>: null}
                    {this.state.renderCardPlayer?<Card 
                        ref="player" 
                        unmountMe={this.handleCardPlayerUnmount}
                        pokemonName={this.state.player.pokemonName}
                        image={this.state.player.image}
                        health={this.state.player.health}
                        attack={this.state.player.attack}
                        pokeId={this.state.player.pokeId}
                        />: null}
                    {this.state.renderCardOpponent?<Card 
                        unmountMe={this.handleCardOpponentUnmount}
                        pokemonName={this.state.opponent.pokemonName}
                        image={this.state.opponent.image}
                        health={this.state.opponent.health}
                        attack={this.state.opponent.attack}
                        pokeId={this.state.opponent.pokeId}
                    />: null}
                </div>
                <div className="BotBar">
                    <button onClick={this.handleAttack}>TestAttack</button>
                    <button onClick={this.handleNamePanelUnmount}>TestName</button>
                    <input placeholder="change name" onChange={(e)=> this.handleChange(e.target.value)}></input>
                    <button onClick={this.changeName}  >TestChangeName </button>
                    <button onClick={this.handleLeaderBoardUnmount}>LeaderBoards</button>
                    <button onClick={this.handleCardPlayerUnmount}>TestPlayer</button>
                    <button onClick={this.handleCardOpponentUnmount}>TestOpp</button>
                </div>

            </div>
        )
    }
}

export default BattleGround;