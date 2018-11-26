import React, {Component} from 'react'

export default class ClassComponent extends Component{

    constructor (props){
        super(props);
        this.state = {value: props.initialValue}
    }

    sum (delta){
        this.setState({value: this.state.value + delta })
    }


    /*
    * Componente baseado em classe deve ter pelo menos essa funcao.
    */
    render(){        
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.sum(-1)} >Dec</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={() => this.sum(1)} >Inc</button>
            </div>
        )        
    }
}