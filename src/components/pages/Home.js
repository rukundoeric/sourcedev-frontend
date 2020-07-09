/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Banner from '../layouts/Banner';
import Header from '../layouts/Header';
import About from '../layouts/About';
import Sintro from '../layouts/Sintro';
import Testimony from '../layouts/Testmony';
import Services from '../layouts/Services';
import Portfolio from '../layouts/Portifolio';
import Blog from '../layouts/Blog';
import Footer from '../layouts/Footer';
import ContactUs from '../layouts/ContactUs';

export default class home extends Component {
  render() {
    return (
      <div>
        <ContactUs />
        <Header />
        <Banner />
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
