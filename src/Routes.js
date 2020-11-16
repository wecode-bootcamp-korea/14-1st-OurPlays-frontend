import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from '../src/Components/Footer/Footer';
import Nav from '../src/Components/Nav/Nav';
import Main from '../src/Pages/Main/Main';
import SignUp from '../src/Pages/SignUp/SignUp';
import Login from '../src/Pages/Login/Login';
import ProductList from '../src/Pages/ProductList/ProductList';
import ProductDetail from '../src/Pages/ProductDetail/ProductDetail';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/Footer' component={Footer} />
          <Route exact path='/Nav' component={Nav} />
          <Route exact path='/Main' component={Main} />
          <Route exact path='/SignUp' component={SignUp} />
          <Route exact path='/' component={Login} />
          <Route exact path='/ProductDetail' component={ProductDetail} />
          <Route exact path='/ProductList' component={ProductList} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
