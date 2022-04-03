import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './categoryTile.css';

const CategoryTile = (props) => {

  const divStyle = {
    backgroundColor: props?.color || '#f3f4f5',
    border: props.color ? 'none' : '1px solid #ccc',
  };

  return (
    <Link to='/products' style={divStyle} className='categoryTile'>
      <div className='categoryTile-pic'>
        <img src={props.img} alt="Imagen tile" />
      </div>
      {
        props.title &&
        <h3
          className='categoryTile-title'
          style={{ color: props.color ? '#fafafa' : '#222' }}
        >
          {props.title}
        </h3>
      }
    </Link>
  );
};

CategoryTile.propTypes = {
  img: propTypes.string.isRequired,
  title: propTypes.string,
  color: propTypes.string
};

export default CategoryTile;