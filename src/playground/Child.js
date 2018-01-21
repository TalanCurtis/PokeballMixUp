import React , {Component} from 'react'

class Child extends Component{
    constructor(props){
        super(props)
        this.state={
            attack:this.props.obj.name,
            health:15
        }
    }


    render(){
        console.log(this.props)
        console.log(this.props.obj.name)
        console.log(this.state.attack)
        return (
            <div>
                {this.props.name}
                {this.props.obj.name}
                <button onClick={this.props.varName} >Click me</button>
            </div>
        )
    }
}

export default Child    