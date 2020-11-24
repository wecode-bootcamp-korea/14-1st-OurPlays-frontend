import React, { Component } from 'react';
import CategoryItems from './Components/CategoryItems';
import './Category.scss';

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
