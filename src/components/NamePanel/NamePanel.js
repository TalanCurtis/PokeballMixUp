import React, { Component} from 'react';
import './NamePanel.css';
import axios  from 'axios';

class NamePanel extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInput:"",
            id:0
        }
        this.handleSubmitPlayer = this.handleSubmitPlayer.bind(this)
    }
    dismiss(){
        this.props.unmountMe();
    } 

    handleChange(val){
        this.setState({userInput:val});
    }

    handleSubmitPlayer(){
        let name = this.state.userInput
        //let id = this.state.id++
        //this.setState({id: 10})
        let body = {id: 0 , name: name, score:0}
        console.log(name);
        axios.post('/api/leaderboard', body)
        .then(res => {
            console.log(body)
        })
    }

    render(){
        return(
            <div className='NamePanel'>
                <h1> Pokeball Mixup!!! </h1>
                <p>You got knocked in head before your big poke match! </p>
                <p>You cant remember what pokemon is it what ball! good luck! </p>
                <div>
                    <input placeholder="Name" onChange={(e)=> this.handleChange(e.target.value)}></input>
                    <button onClick={this.handleSubmitPlayer}>Start</button>
                </div>
            </div>
        )
    }
}

export default NamePanel;