import React , {Component} from 'react';
import Child from './Child';

class Parent extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            name: 'jojo',
            obj:{name:"hat"}
        }
        this.updateCount = this.updateCount.bind(this);
    }
    
    updateCount(){
        this.setState({count: this.state.count + 1})
        console.log("Poooo")
    }
    render(){
        return (
            <div>
                Count : {this.state.count}
                <Child varName={this.updateCount} name={this.state.name} obj={this.state.obj}/>
            </div>
        )
    }
}

export default Parent;