import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from '../src/Components/Footer/Footer';
import Nav from '../src/Components/Nav/Nav';
import Main from '../src/Pages/Main/Main';
import SignUp from '../src/Pages/SignUp/SignUp';
import Login from '../src/Pages/Login/Login';
import ProductList from '../src/Pages/ProductList/ProductList';
import ProductDetail from '../src/Pages/ProductDetail/ProductDetail';
import Category from './Components/Category/Category';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/Footer' component={Footer} />
          <Route exact path='/Nav' component={Nav} />
          <Route exact path='/' component={Main} />
          <Route exact path='/SignUp' component={SignUp} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/ProductDetail' component={ProductDetail} />
          <Route exact path='/ProductList' component={ProductList} />
          <Route exact path='/Category' component={Category} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
