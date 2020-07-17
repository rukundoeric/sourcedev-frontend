/* eslint-disable */
import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Test from "./layouts/Test";
import aos from "aos";
import ContactUs from "./layouts/ContactUs";
import loader from "./common/loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../plugins";
import "../assets/css/style.css";
import "aos/dist/aos.css";
import "../plugins/fontawesome/css/all.css";

class App extends Component {
  state = {
    activeMenu: "home",
  };
  componentDidMount() {
    aos.init();
    window.$(window).scroll(() => {
      const windowTop = window.$(window).scrollTop() + 1;
      const aboutPart = window.$(".about-part").offset().top - 200;
      const servicePart = window.$(".service-part").offset().top - 200;
      const portifolioPart = window.$(".portfolio_part").offset().top - 200;
      const testimonyPart = window.$(".testimony-section").offset().top - 200;
      const blogPart = window.$(".blog_part").offset().top - 200;

      if (windowTop < aboutPart) {
        this.setState({ activeMenu: "home" });
      } else if (windowTop >= aboutPart && windowTop < servicePart) {
        this.setState({ activeMenu: "about" });
      } else if (windowTop >= servicePart && windowTop < portifolioPart) {
        this.setState({ activeMenu: "service" });
      } else if (windowTop >= portifolioPart && windowTop < testimonyPart) {
        this.setState({ activeMenu: "portifolio" });
      } else if (windowTop >= testimonyPart && windowTop < blogPart) {
        this.setState({ activeMenu: "testimony" });
      } else if (windowTop >= blogPart) {
        this.setState({ activeMenu: "blog" });
      }
    });
  }
  goTo(e, d) {
    e.preventDefault();
    window.$("html,body").animate(
      {
        scrollTop: window.$(d).offset().top - 150,
      },
      3000,
      "easeInOutExpo"
    );
  }
  render() {
    return (
      <BrowserRouter>
        <ToastContainer />
        <Header goto={this.goTo} activeMenu={this.state.activeMenu} />
        <ContactUs />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/loader" component={loader} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
