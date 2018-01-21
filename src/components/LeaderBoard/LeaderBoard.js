import React, { Component} from 'react';
import './LeaderBoard.css';
import axios from 'axios'

class LeaderBoard extends Component{
    constructor(props){
        super(props),
        this.state={
            leaderBoard:[]
        }
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

    render(){
        return(
            <div className='LeaderBoard'>
                <h1>Leader Boards!!!</h1>
                {this.state.leaderBoard.map( playerStat => (
                    <div key={playerStat.id}>
                        <span > Name:{playerStat.name} | Score: {playerStat.score}</span>
                    </div>
                ))}
            </div>
        )
    }
}

export default LeaderBoard;