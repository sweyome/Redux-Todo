import React, { Component } from "react";
import Redux from 'react';
import { Alert } from 'react-bootstrap';
import {connect} from 'react-redux';
import { addText } from '../../actions'
import TodoList from "../TodoList/TodoList";

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            inputValue: ''
        }
    }

    inputHandler = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    addHandler = (e) => {
        e.preventDefault();
        this.props.addText(this.state.inputValue);
    }

    render(){
    return (
        <div>
            <input className ="form" placeholder="enter todo" value={this.state.inputValue} onChange={this.inputHandler}/>
            <button className ="btn" onClick={this.addHandler}>Add Todo</button>
            <button className ="btn" >Clear</button>
        </div>
    )
}
}

export default connect( () => ({}), {addText} )(TodoForm);