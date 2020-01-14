import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';

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

  handleChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monsters" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
