import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Redux from 'react';
import reducers from './reducers/reducers';
// import Headline from './components/test';
import {connect} from 'react-redux';
import Header from './components/Header'
import TodoForm from './components/ToDoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { addText } from './actions/'

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      }
    }

    // inputHandler = (e) => {
    //   this.setState({
    //     [e.target.input]: e.target.value,
    //   })
    // }

    // addHandler = (e) => {
    //   e.preventDefault();
    //   this.props.addText(this.state.input);
    // }

  render() {
    return (
      <div className="App">
        <Header />
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default connect(()=>({}), {addText})(App)
