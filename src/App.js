import React, { Component } from 'react';
// import './App.css';
//import {Provider} from 'react-redux';
//import Counter from './components/counter1/counter'
//import store from './components/counter1/store';
//import Todo from './components/todoRedux/todo';
// import store from './components/calculator/store';
// import Calci from './components/calculator/cal';
import {Provider} from 'react-redux';
import Todo from './tested/todo.js'
import store from './tested/store1'
import Counter from './tested/counter.js';
 
class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
      <Counter/>
      </Provider>
      </div>
    );
  }
}

export default App;
