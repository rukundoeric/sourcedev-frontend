/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { Component } from 'react';
import { portifolio } from '../../data/index.json';
import portifolios from '../../data/portifolios';
import PortiforioItem from '../items/Portifolio';

export default class Portifolio extends Component {
  getImage = (src) => {
    const image = require(src);
    return image;
  }

  render() {
    return (
      <section className="portfolio_part section_padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 heading-section text-center ftco-animate mb-5">
              <span className="subheading">{portifolio.sectionName}</span>
              <h3 className="mb-2 mt-3 mb-3">{portifolio.title}</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card-columns">
                {portifolios.map((item, i) => (
                  <PortiforioItem
                    key={`key_${i}`}
                    logo={item.logo}
                    imageBackground={item.imageBackground}
                    imageXL={item.imageXL}
                    imageMD={item.imageMD}
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-12 d-flex justify-content-center align-items-center">
              <a href="www.google.com" className="btn-1">
                Load More
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
