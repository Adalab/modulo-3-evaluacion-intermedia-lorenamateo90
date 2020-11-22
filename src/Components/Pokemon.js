import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = (props) => {
  return (
    <div className='pokemon'>
      <img src={props.imageUrl} alt={props.pokeName} />
      <h2 className='name'>{props.pokeName}</h2>
      <ul className='types'>
        {props.typesArray.map((pokemon, index) => {
          return <li key={index}>{pokemon}</li>;
        })}
      </ul>
    </div>
  );
};
Pokemon.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
};

export default Pokemon;
