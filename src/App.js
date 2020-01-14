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
      searchField: '',
    };
  }

  async componentDidMount() {
    const users = await (
      await fetch('https://jsonplaceholder.typicode.com/users')
    ).json();
    this.setState({ monsters: users });
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
