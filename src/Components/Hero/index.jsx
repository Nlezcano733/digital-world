import React from 'react';
import propTypes from 'prop-types';
import './hero.css';

const Hero = (props) => {
  return (
    <div className="hero">
      <img src={props.img} alt={props?.alt || 'Imagen Hero'} className='hero-img' />
      {
        props.content &&
        <div className='hero-content'>
          <p>{props.content}</p>
        </div>
      }
    </div>
  );
};

Hero.propTypes = {
  img: propTypes.string.isRequired,
  alt: propTypes.string,
  content: propTypes.string
};

export default Hero;
