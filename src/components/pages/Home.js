/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import aos from 'aos';
import Banner from '../layouts/Banner';
import About from '../layouts/About';
import Sintro from '../layouts/Sintro';
import Testimony from '../layouts/Testmony';
import Services from '../layouts/Services';
import Portfolio from '../layouts/Portifolio';
import Blog from '../layouts/Blog';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import ContactUs from '../layouts/ContactUs';
import 'aos/dist/aos.css';

export default class home extends Component {
    state = {
      activeMenu: 'home',
    };

    componentDidMount() {
      aos.init();
      window.$(window).scroll(() => {
        const windowTop = window.$(window).scrollTop() + 1;
        const aboutPart = window.$('.about-part').offset().top - 200;
        const servicePart = window.$('.service-part').offset().top - 200;
        const portifolioPart = window.$('.portfolio_part').offset().top - 200;
        const testimonyPart = window.$('.testimony-section').offset().top - 200;
        const blogPart = window.$('.blog_part').offset().top - 200;

        if (windowTop < aboutPart) {
          this.setState({ activeMenu: 'home' });
        } else if (windowTop >= aboutPart && windowTop < servicePart) {
          this.setState({ activeMenu: 'about' });
        } else if (windowTop >= servicePart && windowTop < portifolioPart) {
          this.setState({ activeMenu: 'service' });
        } else if (windowTop >= portifolioPart && windowTop < testimonyPart) {
          this.setState({ activeMenu: 'portifolio' });
        } else if (windowTop >= testimonyPart && windowTop < blogPart) {
          this.setState({ activeMenu: 'testimony' });
        } else if (windowTop >= blogPart) {
          this.setState({ activeMenu: 'blog' });
        }
      });
    }

    goTo(e, d) {
      e.preventDefault();
      window.$('html,body').animate(
        {
          scrollTop: window.$(d).offset().top - 150,
        },
        3000,
        'easeInOutExpo',
      );
    }

    render() {
      const {
        hideContactUs,
        showContactUs,
      } = this.props;
      return (
        <div>
          <Header goto={this.goTo} activeMenu={this.state.activeMenu} />
          <Banner hideContactUs={hideContactUs} showContactUs={showContactUs} />
          <ContactUs />
          <About />
          <Sintro />
          <Services />
          <Portfolio />
          <Testimony />
          <Blog />
          <Footer />
        </div>
      );
    }
}
