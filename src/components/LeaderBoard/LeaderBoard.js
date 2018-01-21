import React, { Component} from 'react';
import './LeaderBoard.css';

class LeaderBoard extends Component{
    //constructor(){}
    dismiss(){
        this.props.unmountMe();
    }

    render(){
        return(
            <div className='LeaderBoard'>
                LeaderBoard
            </div>
        )
    }
}

export default LeaderBoard;