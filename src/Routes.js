import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from '../src/Components/Footer/Footer';
import Nav from '../src/Components/Nav/Nav';
import Main from '../src/Pages/donghakim/Main/Main';
import ProductDetail from '../src/Pages/donghakim/ProductDetail/ProductDetail';
import SignUp from '../src/Pages/donghakim/SignUp/SignUp';
import Login from '../src/Pages/youngjoonpark/Login/Login';
import ProductList from '../src/Pages/youngjoonpark/ProductList/ProductList';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path='/Footer' component={Footer} /> */}
          {/* <Route exact path='/Nav' component={Nav} /> */}
          <Route exact path='/' component={Main} />
          {/* <Route exact path='/SignUp' component={SignUp} /> */}
          {/* <Route exact path='/Login' component={Login} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
