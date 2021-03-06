import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/layouts/Home";
import Footer from "./components/layouts/Footer";
import SignUp from "./components/authentications/SignUp";
import SignIn from "./components/authentications/SignIn";
import Menu from "./components/menus/Menu";
import OrderHistory from "./components/menus/OrderHistory";

class App extends Component {

  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/menus" component={Menu} />
          <Route exact path="/order-history" component={OrderHistory} />
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
