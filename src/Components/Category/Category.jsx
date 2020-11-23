import React, { Component } from 'react';
import CategoryItems from './Components/CategoryItems';
import './Category.scss';
import { Link } from 'react-router-dom';

class Category extends Component {
  render() {
    return (
      <div className='Category'>
        <CategoryItems />
      </div>
    );
  }
}

export default Category;
