import React, {Component} from 'react';
import './BattleGround.css';
//import axios from 'axios';
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
                lifes: 3
            },
            opponent: {
                name:"",
                pokeId:"",
                pokemonName:"",
                health:0,
                attack:0,
            },
            defeated:0,
            renderCardPlayer: false,
            renderCardOpponent: false,
            renderLeaderBoard: false,
            renderNamePanel: true,
        }
        this.handleNamePanelUnmount = this.handleNamePanelUnmount.bind(this)
        this.handleLeaderBoardUnmount = this.handleLeaderBoardUnmount.bind(this)
        this.handleCardPlayerUnmount = this.handleCardPlayerUnmount.bind(this)
        this.handleCardOpponentUnmount = this.handleCardOpponentUnmount.bind(this)
    }

    handleNamePanelUnmount(){
        console.log("HELLO")
        if (this.state.renderNamePanel === true){
            this.setState({renderNamePanel: false})
        }else if(this.state.renderNamePanel === false){
            this.setState({renderNamePanel: true})
        }
    }
    // handleNamePanelUnmount(){
    //     if (this.state.renderNamePanel=== true){
    //         this.setState({renderNamePanel:false})
    //     }else if(this.state.renderNamePanel=== false){
    //     this.setState({renderNamePanel:true})
    //     }
    // }

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
            this.setState({renderLeaderBoard:false})
        }else if(this.state.renderLeaderBoard=== false){
        this.setState({renderLeaderBoard:true})
        }
    }

    render(){
        return(
            <div className="BattleGround">
                <div className="TopBar">
                    <div className="PlayerName">PlayerName</div>
                    <div className="OpponentsBeat">Number of Opponents Beat</div>
                    <div className="OpponentName">OpponentName</div>
                </div>
                <div className="Table">
                    {this.state.renderNamePanel?<NamePanel unmountMe={this.handleNamePanelUnmount}/>: null}
                    {this.state.renderLeaderBoard?<LeaderBoard unmountMe={this.handleLeaderBoardUnmount}/>: null}
                    {this.state.renderCardPlayer?<Card unmountMe={this.handleCardPlayerUnmount}/>: null}
                    {this.state.renderCardOpponent?<Card unmountMe={this.handleCardOpponentUnmount}/>: null}
                </div>
                <div className="BotBar">
                    <input className="UserInput"></input>
                    <div> another Div</div>
                    <button  onClick={this.handleNamePanelUnmount}>TestName</button>
                    <button  onClick={this.handleLeaderBoardUnmount}>LeaderBoards</button>
                    <button onClick={this.handleCardPlayerUnmount}>TestPlayer</button>
                    <button onClick={this.handleCardOpponentUnmount}>TestOpp</button>
                </div>

            </div>
        )
    }
}

export default BattleGround;