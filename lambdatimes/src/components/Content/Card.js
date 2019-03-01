import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.img} alt="Images"/>
        </div>
        <span>By {props.author}</span>
      </div>
    </div>
  );
};


Card.PropTypes = {
  headline: PropTypes.string,
  img: PropTypes.string,
  author: PropTypes.string
};
// Make sure to include PropTypes.

export default Card;
