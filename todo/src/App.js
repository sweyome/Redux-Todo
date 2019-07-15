import React, { Component } from 'react';
import './App.css';
import Redux from 'react';
import reducers from './reducers/reducers';
import Headline from './components/test';
import {connect} from 'react-redux';
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
  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default connect(()=>({}), {addText})(App)