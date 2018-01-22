import React, { Component} from 'react';
import './NamePanel.css';
import axios  from 'axios';

class NamePanel extends Component{
    constructor(props){
        super(props);
    }
    dismiss(){
        this.props.unmountMe();
    } 

    render(){
        return(
            <div className='NamePanel'>
                <div className="Spacer"></div>
                <p>You got knocked in head before your big poke match! </p>
                <p>You cant remember what pokemon is it what ball!!!! </p>
                <p>Good luck!</p>
                <div className="Spacer"></div>
                <div>
                    <button className="StartButton" onClick={this.props.start}>Start</button>
                </div>
            </div>
        )
    }
}

export default NamePanel;