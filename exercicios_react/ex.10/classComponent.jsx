import React, {Component} from 'react'

export default class ClassComponent extends Component{
    /*
    * Componente baseado em classe deve ter pelo menos essa funcao.
    */
    render(){
        return (
            <h1>{this.props.value}</h1>
        )        
    }
}