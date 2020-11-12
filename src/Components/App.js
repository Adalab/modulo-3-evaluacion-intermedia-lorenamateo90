import '../styleSheets/App.css';
import React from 'react';
import PokemonsList from './PokemonsList';
import pokemons from '../data/pokemons';

class App extends React.Component {
  render() {
    console.log(pokemons);
    return (
      <div>
        <PokemonsList pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
