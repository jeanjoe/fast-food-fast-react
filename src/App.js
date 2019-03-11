import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/layouts/Home";
import Footer from "./components/layouts/Footer";
import SignUp from "./components/authentications/SignUp";

class App extends Component {

  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={SignUp} />
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
