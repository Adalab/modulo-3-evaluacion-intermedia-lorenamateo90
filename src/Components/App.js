import '../styleSheets/App.css';
import React from 'react';
import PokemonsList from './PokemonsList';
import Pokemons from '../data/Pokemons';

class App extends React.Component {
  render() {
    console.log(Pokemons);
    return (
      <div>
        App
        <PokemonsList Pokemons={Pokemons} />
      </div>
    );
  }
}

export default App;
