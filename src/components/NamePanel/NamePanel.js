import React, { Component} from 'react';
import './NamePanel.css';

class NamePanel extends Component{
    //constructor(){}
    dismiss(){
        this.props.unmountMe();
    }

    render(){
        return(
            <div className='NamePanel'>
                <h1> Pokeball Mixup!!! </h1>
                <p>You got knocked in head before your big poke match! </p>
                <p>You cant remember what pokemon is it what ball! good luck! </p>
                <div>
                    <input placeholder="Name"></input>
                    <button>Start</button>
                </div>
            </div>
        )
    }
}

export default NamePanel;