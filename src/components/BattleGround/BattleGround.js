import React, {Component} from 'react';
import './BattleGround.css';
import axios from 'axios';
import Card from '../Card/Card'
import NamePanel from '../NamePanel/NamePanel'
import LeaderBoard from '../LeaderBoard/LeaderBoard'
import TitleScreenImage from '../../images/TitleScreen.jpg'
import Yoda from '../../images/YODA.gif'
import SelfMotivateButton from '../Buttons/SelfMotivateButton'
import PokeballImg from '../../images/Pokeball.png'

class BattleGround extends Component{
    constructor(props){
        super(props);
        this.state={
            player:{
                name:"???",
                pokeId:0,
                pokemonName:"...",
                image: PokeballImg,
                health: 0,
                attack: 0,
                lives: 3,
                score:0,
                id: 0,
            },
            opponent: {
                name:"Ziggy Stardust",
                pokeId:"",
                pokemonName:"...",
                image: PokeballImg,
                health:0,
                attack:0,
            },
            playerBG: 'transparent',
            oppBG: 'transparent',
            backgroundColor: 'transparent',
            renderCardPlayer: false,
            renderCardOpponent: false,
            renderLeaderBoard: false,
            renderNamePanel: true,
        }
        this.handleNamePanelUnmount = this.handleNamePanelUnmount.bind(this)
        this.handleLeaderBoardUnmount = this.handleLeaderBoardUnmount.bind(this)
        this.handleCardPlayerUnmount = this.handleCardPlayerUnmount.bind(this)
        this.handleCardOpponentUnmount = this.handleCardOpponentUnmount.bind(this)
        this.handleAttack = this.handleAttack.bind(this)
        this.handleNextOpponent = this.handleNextOpponent.bind(this)
        this.changeColor = this.changeColor.bind(this)
    }

/// Handerlers controller flow and components being displayed
    handleNamePanelUnmount(){
        // reset player stats
        let resetPlayer={
            name:"???",
            pokeId:0,
            pokemonName:"...",
            image: PokeballImg,
            health: 0,
            attack: 0,
            lives: 2,
            score:0,
            id:0
        }
        this.setState({player: resetPlayer})

        if (this.state.renderNamePanel === true){
            //Start Game
            this.setState({
                renderNamePanel: false
            })
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
                // pokemonName="",
                pokeId=Math.floor(Math.random()*400+1)
                // image=""

            axios.get(`http://pokeapi.co/api/v2/pokemon/${pokeId}`)
            .then( res => {
            //console.log(res);
            for (let index in res.data.stats){
                //console.log(res.data.stats[index].stat.name)
                if(res.data.stats[index].stat.name === "attack"){
                    //console.log(res.data.stats[index].base_stat)
                    attack = res.data.stats[index].base_stat
                }else if(res.data.stats[index].stat.name === "hp"){
                    health = res.data.stats[index].base_stat
                }
            }
            // testing changes attack health
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
                // pokemonName="",
                pokeId=Math.floor(Math.random()*400+1)
                // image=""

            axios.get(`http://pokeapi.co/api/v2/pokemon/${pokeId}`)
            .then( res => {
            //console.log(res);
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

    handleNextOpponent(){
        if(this.state.player.score<2){
            console.log('next opp')
            this.setState({renderCardOpponent:false})
            let copy = Object.assign({}, this.state.opponent)
            let attack = 0,
                health = 0,
                // pokemonName="",
                pokeId=Math.floor(Math.random()*400+1)
                // image=""

                ///
                axios.get(`http://pokeapi.co/api/v2/pokemon/${pokeId}`)
                .then( res => {
                //console.log(res);
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
                let copyPlayer = Object.assign({}, this.state.player)
                copyPlayer.score ++
                this.setState({
                    player: copyPlayer,
                    opponent: copy,
                    renderCardOpponent: true
                })
            })
        }else{
            axios.get(`http://swapi.co/api/people/20`)
            .then(res=>{
                //console.log(res.data.name)
                alert("Whats this! A strange pokeball falls from the sky only to open up and reveal.....")
                this.setState({
                    opponent: {
                        name:res.data.name,
                        pokeId:"",
                        pokemonName:res.data.name,
                        image:Yoda,
                        health:9999,
                        attack:9999,
                    },
                })
            })
        }
    }
    handleNextPlayerPokeball(){
        console.log('next pokeball, yikes!')
        this.setState({renderCardPlayer:false})
        let copy = Object.assign({}, this.state.player)
        let attack = 0,
            health = 0,
            // pokemonName="",
            pokeId=Math.floor(Math.random()*400+1)
            // image=""

            ///
            axios.get(`http://pokeapi.co/api/v2/pokemon/${pokeId}`)
            .then( res => {
            //console.log(res);
            for (let index in res.data.stats){
                //console.log(res.data.stats[index].stat.name)
                if(res.data.stats[index].stat.name === "attack"){
                    //console.log(res.data.stats[index].base_stat)
                    attack = res.data.stats[index].base_stat
                }else if(res.data.stats[index].stat.name === "hp"){
                    health = res.data.stats[index].base_stat
                }
            }
            // testing changes too
            copy.attack = attack;
            copy.health = health;
            copy.pokemonName= res.data.forms[0].name;
            copy.image= res.data.sprites.front_default;
            copy.lives --;
            this.setState({
                player: copy,
            })
        })
        this.setState({ renderCardPlayer: true})
    }

    handleChange(val){
        let copy = Object.assign({}, this.state.player)
        copy.name = val
        this.setState({player:copy});
    }

    handleAttack(){
        let copyPlayer = Object.assign({}, this.state.player)
        let copyOpp = Object.assign({}, this.state.opponent)
        //console.log(copyPlayer)
        copyOpp.health-=copyPlayer.attack
        // Change color of text when you hits opp
        this.setState({oppBG: 'red'})
        setTimeout(()=>{
            this.setState({oppBG: 'transparent'})
        },1000)
        this.setState({opponent:copyOpp})
        if(copyOpp.health<=0){
            setTimeout(this.handleNextOpponent,500)
        }else if(copyOpp.health>0){
            setTimeout(()=>{
                if(copyPlayer.lives>0){
                    copyPlayer.health-= copyOpp.attack 
                    // Change color of text when enemy hits you
                    this.setState({playerBG: 'red'})
                    setTimeout(()=>{
                        this.setState({playerBG: 'transparent'})
                    },1000)
                    ////////////
                    this.setState({player:copyPlayer})
                    if(copyPlayer.health<=0){
                        this.handleNextPlayerPokeball()
                    }
                }else{
                    console.log("GAME OVER!!")
                    let copyPlayerFinal = this.state.player;
                    let body = {
                        name: copyPlayerFinal.name,
                        score: copyPlayerFinal.score,
                    }
                    axios.post('/api/leaderboard' , body)
                    .then((res)=>{
                        console.log("got this back", res.data)
                        let copyPlayer = Object.assign({}, this.state.player)
                        copyPlayer.id = res.data.id
                        this.setState({player:copyPlayer})
                    })
                    .catch((err)=>(console.log(err)))
                    this.handleLeaderBoardUnmount();
                }
            },500) 
        }
        //console.log('Looging', copyPlayer)
    }
    changeColor(){
        console.log('change color')
        this.setState({oppBG: 'red'})

        setTimeout(()=>{
            this.setState({oppBG: 'transparent'})
        },1000)
    }

    render(){
        return(
            <div className="BattleGround">
                <div className="TopBar">
                    <div className="PlayerName">{this.state.player.name}</div>
                    <div className="OpponentsBeat">Opponents Beat {this.state.player.score}</div>
                    <div className="OpponentName">Opponent: {this.state.opponent.name}</div>
                </div>
                <div className="Table">
                    {this.state.renderNamePanel?<div>
                        <div className="Intro">
                            <img className='TitleScreenImage' alt="" src={TitleScreenImage}></img>
                            <div className='Spacer'></div>
                            <p>Hey kid wake up! whats your name? 
                            <input 
                                placeholder="Enter name"
                                onChange={(e)=> this.handleChange(e.target.value)}
                            ></input>
                            </p>
                        </div>
                        <NamePanel 
                        unmountMe={this.handleNamePanelUnmount}
                        start={this.handleNamePanelUnmount}
                    /></div>: null}
                    {this.state.renderLeaderBoard?<LeaderBoard 
                        unmountMe={this.handleLeaderBoardUnmount}
                        id={this.state.player.id}
                        score={this.state.player.score}
                    />: null}
                    {this.state.renderCardPlayer?<Card 
                        changeColor={this.state.playerBG}
                        define='player'
                        unmountMe={this.handleCardPlayerUnmount}
                        pokemonName={this.state.player.pokemonName}
                        image={this.state.player.image}
                        health={this.state.player.health}
                        attack={this.state.player.attack}
                        pokeId={this.state.player.pokeId}
                        attackButton={this.handleAttack}
                        />: null}
                    {this.state.renderCardOpponent?<Card 
                        changeColor={this.state.oppBG}
                        define="opp"
                        unmountMe={this.handleCardOpponentUnmount}
                        pokemonName={this.state.opponent.pokemonName}
                        image={this.state.opponent.image}
                        health={this.state.opponent.health}
                        attack={this.state.opponent.attack}
                        pokeId={this.state.opponent.pokeId}
                    />: null}
                </div>
                <div className="BotBar">
                    <p className="Lives">lives left: {this.state.player.lives}</p>
                    <p>Self Motivate:</p>
                    <SelfMotivateButton num="1" string="Go for it" name={this.state.player.name}></SelfMotivateButton>
                    <SelfMotivateButton num="2" string="You can do it " name={this.state.player.name}></SelfMotivateButton>
                    <SelfMotivateButton num="3" string="Hang in there" name={this.state.player.name}></SelfMotivateButton>
                    <button onClick={this.handleNamePanelUnmount}>PlayAgain</button>
                    <button onClick={this.handleLeaderBoardUnmount}>LeaderBoards</button>
                </div>
            </div>
        )
    }
}

                    /* <button className="changeColorButton" onClick={this.changeColor}>Change Color</button>
                    <p 
                        className="textToChange"
                        style={{backgroundColor:this.state.backgroundColor}}
                    >Change Me!</p> */

export default BattleGround;