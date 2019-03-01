import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
    {props.cards.map(c => (
      
      <Card card = {c} />
      ))};
    
    </div>
  );  
};

Cards.propTypes={
  headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  
};

// Make sure you include prop types for all of your incoming props

export default Cards;

/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/