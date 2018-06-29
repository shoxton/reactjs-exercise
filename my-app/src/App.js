import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import PostList from './components/PostList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <PostList />
        </div>
      </div>
    );
  }
}

export default App;
