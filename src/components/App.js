/* eslint-disable */
import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./layouts/Test";
import loader from "./common/loader";
import { ToastContainer } from "react-toastify";
import Admin from "./admin/components/index";
import "react-toastify/dist/ReactToastify.css";
import "../plugins";
import "../assets/css/style.css";
import "../plugins/fontawesome/css/all.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/loader" component={loader} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/dashboard" component={Admin} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
