import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'asc1',
        },
        {
          name: 'Dracula',
          id: 'asc2',
        },
        {
          name: 'Zombie',
          id: 'asc3',
        },
      ],
    };
  }

  async componentDidMount() {
    const users = await (
      await fetch('https://jsonplaceholder.typicode.com/users')
    ).json();
    this.setState({ monsters: users });
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />     
      </div>
    );
  }
}

export default App;
