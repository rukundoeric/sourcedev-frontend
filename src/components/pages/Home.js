/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Banner from '../layouts/Banner';
import About from '../layouts/About';
import Sintro from '../layouts/Sintro';
import Testimony from '../layouts/Testmony';
import Services from '../layouts/Services';
import Portfolio from '../layouts/Portifolio';
import Blog from '../layouts/Blog';

export default class home extends Component {

  render() {
    const {
      hideContactUs,
      showContactUs,
    } = this.props;
    return (
      <div>
        <Banner
          hideContactUs={hideContactUs}
          showContactUs={showContactUs}
        />
        <About />
        <Sintro />
        <Services />
        <Portfolio />
        <Testimony />
        <Blog />
      </div>
    );
  }
}
