import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';

const choices = [0, 1, 2, 3];

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: 0
    };
  }

  handleClick = i => this.setState({ selected: i });

  render() {
    return (
      <div className='App'>
        <header className='App-header'>UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            choices={choices}
            choiceButton={this.state.selected}
            handleClick={this.handleClick}
          />
        </main>
      </div>
    );
  }
}

export default App;
