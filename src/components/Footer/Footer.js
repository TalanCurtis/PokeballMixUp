import React, {Component} from 'react'
import './Footer.css'

class Footer extends Component{
    constructor(props){
    super(props);
        this.state = {
            playerInput:""
        }
    }
    render(){
        return(
            <div className='Footer'>
                <input className='PlayerInput' placeholder="put player name here"></input>
                <button>Add Player</button>
                <button>Edit Player</button>
                <button className="LeaderBoardsButton">Leader Boards</button>
            </div>
        )
    }
}


export default Footer;