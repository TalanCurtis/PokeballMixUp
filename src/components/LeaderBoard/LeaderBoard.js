import React, { Component} from 'react';
import './LeaderBoard.css';
import axios from 'axios'

class LeaderBoard extends Component{
    constructor(props){
        super(props),
        this.state={
            leaderBoard:[],
            idToUpdate:0,
            nameUpdate:""
        }
        this.handleChangeId = this.handleChangeId.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
        this.changeName = this.changeName.bind(this)
        this.deletePlayer = this.deletePlayer.bind(this)
    }
    dismiss(){
        this.props.unmountMe();
    }

    componentDidMount(){
        console.log('LOOOODED')
        axios.get('api/leaderBoard')
        .then(res => {
            this.setState({leaderBoard: res.data})
        })
    }
    
    changeName(){
        console.log("Changing Name")
        let id = this.state.idToUpdate*1,
            name = this.state.nameUpdate
        let body= {id:id, name: name, score: 2}
        axios.put('/api/leaderboard/', body)
        .then((res)=>{
            this.setState({leaderBoard:res.data})
        })
    }

    handleChangeName(val){
        this.setState({nameUpdate: val})
    }

    handleChangeId(val){
        this.setState({idToUpdate: val})
    }
    deletePlayer(){
        console.log('delete player')
        let id = this.state.idToUpdate*1
        axios.delete('/api/leaderboard/', {id:id})
        .then((res) =>{
            this.setState({leaderBoard:res.data})
        })
    }
    render(){
        return(
            <div className='LeaderBoard'>
                <h1>Leader Boards!!!</h1>
                {this.state.leaderBoard.map( playerStat => (
                    <div key={playerStat.id}>
                        <span > Name:{playerStat.name} | Score: {playerStat.score}</span>
                    </div>
                ))}
                <div className="Spacer"></div>
                <p>Do you want to change your a name?</p>
                <input 
                    type="number"
                    placeholder="enter id"
                    onChange={(e)=> this.handleChangeId(e.target.value)}
                ></input>
                <p>my id {this.props.playerId}</p>
                <input 
                    placeholder="Enter new name"
                    onChange={(e)=> this.handleChangeName(e.target.value)}
                ></input>
                <button onClick={this.changeName}>Accept</button>
                <div className="Spacer"/>
                <button onClick={this.deletePlayer}>Delete that Player by Id</button>
                
            </div>
        )
    }
}

export default LeaderBoard;