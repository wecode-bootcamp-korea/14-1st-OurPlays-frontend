import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../src/Components/Footer/Footer";
import Nav from "../src/Components/Nav/Nav";
import Main from "../src/Pages/Main/Main";
import SignUp from "../src/Pages/SignUp/SignUp";
import Login from "../src/Pages/Login/Login";
import ProductList from "../src/Pages/ProductList/ProductList";
import ProductDetail from "../src/Pages/ProductDetail/ProductDetail";
import BookMarkList from "./Pages/ProductDetail/BookMarkList";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/Footer" component={Footer} />{" "}
          <Route exact path="/Nav" component={Nav} />{" "}
          <Route exact path="/" component={Main} />{" "}
          <Route exact path="/SignUp" component={SignUp} />{" "}
          <Route exact path="/Login" component={Login} />{" "}
          <Route
            exact
            path="/ProductList/ProductDetail/:place_id"
            component={ProductDetail}
          />{" "}
          <Route exact path="/ProductList" component={ProductList} />{" "}
          <Route exact path="/BookMarkList" component={BookMarkList} />{" "}
          <Route
            exact
            path="/BookMarkList/BookMarkLists/:id"
            component={BookMarkList}
          />{" "}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
