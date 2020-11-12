import React from 'react';
import Pokemon from './Pokemon';

class PokemonsList extends React.Component {
  render() {
    const items = this.props.pokemons.map((pokemon, index) => {
      return (
        <li key={pokemon.id} id={index} className='card' title={pokemon.name}>
          <Pokemon pokemon={pokemon} />
        </li>
      );
    });

    return (
      <div>
        LISTA DE POKEMONS
        <ul className='cards'>{items}</ul>
      </div>
    );
  }
}

export default PokemonsList;
