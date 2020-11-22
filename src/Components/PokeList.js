import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  return (
    <ul className='pokemon-list'>
      {props.pokemons.map((item) => {
        return (
          <li key={item.id} className='pokemon-item'>
            <Pokemon
              imageUrl={item.url}
              pokeName={item.name}
              typesArray={item.types}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default PokeList;
