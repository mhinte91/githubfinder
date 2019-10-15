import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log(123);
  }
  render() {
    return (
      <nav className='App'>
        <Navbar />
        <div className='container'>
          <Users />
        </div>
      </nav>
    );
  }
}

export default App;
