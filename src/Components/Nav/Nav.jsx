import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <div className='Nav'>
        <nav>
          <section className='main-nav'>
            {/* <div className='logo-icon'>hourplace</div>
            <div className='search-input'>
              <input type='text' />
            </div> */}
            <div className='nav-icons'>
              {/* <a href='a'>aaaaa</a>
              <a href='a'>bbbbb</a>
              <a href='a'>ccccc</a>
              <a href='a'>ddddd</a>
              <a href='a'>eeeee</a> */}
            </div>
          </section>
          <section className='side-nav'>
            {/* <span className='home'>home</span>
            <span className='route'>route</span> */}
          </section>
        </nav>
      </div>
    );
  }
}

export default Nav;
