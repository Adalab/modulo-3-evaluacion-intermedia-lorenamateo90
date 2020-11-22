import React from 'react';
import '../stylesheets/App.scss';
import pokeData from '../data/data.json';
import PokeList from './PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokeData,
    };
  }
  render() {
    return (
      <div className='App'>
        <h1 className='title'>Mi lista de pokemons</h1>
        <PokeList pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
