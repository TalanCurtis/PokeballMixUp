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
                pokemonName:"",
                health: 0,
                attack: 0,
                lifes: 3,
                score:0,
            },
            opponent: {
                name:"",
                pokeId:"",
                pokemonName:"",
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
        this.handleNamePanelSubmit = this.handleNamePanelSubmit.bind(this)
    }

    

    handleNamePanelUnmount(){
        if (this.state.renderNamePanel === true){
            this.setState({renderNamePanel: false})
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
        this.setState({renderCardPlayer:true})
        }
    }
    handleCardOpponentUnmount(){
        if (this.state.renderCardOpponent=== true){
            this.setState({renderCardOpponent:false})
        }else if(this.state.renderCardOpponent=== false){
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
    ///NOT WORKING
    handleAttack(attack, health){
        console.log('attack')
        let test = this.refs.player
        console.log(test)

    }
    changeName(){
        console.log("change name")
    }
    handleChange(val){
        let copyPlayer = Object.assign({},this.state.player.name=val)
        this.setState({copyPlayer});
    }

    handleNamePanelSubmit(){
        this.setState({renderNamePanel: false})
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
                    {this.state.renderNamePanel?<NamePanel unmountMe={this.handleNamePanelUnmount}/>: null}
                    {this.state.renderLeaderBoard?<LeaderBoard unmountMe={this.handleLeaderBoardUnmount}/>: null}
                    {this.state.renderCardPlayer?<Card ref="player"unmountMe={this.handleCardPlayerUnmount}/>: null}
                    {this.state.renderCardOpponent?<Card unmountMe={this.handleCardOpponentUnmount}/>: null}
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