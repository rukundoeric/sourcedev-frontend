/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { pricing } from '../../data/index.json';
import Selector from '../common/select';
import '../../assets/css/nice-select.css';
import '../../plugins/niceSelect';

export default class Pricing extends Component {
  componentDidMount() {
    window.$('select').niceSelect();
  }

  render() {
    return (
      <section className="pricing-part">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 heading-section text-center ftco-animate mb-5">
              <span className="subheading">{pricing.sectionName}</span>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-xl-12 d-flex justify-content-center align-items-center">
              <div className="pricing-inner">
                <h1>
                  Pick your type of
                  <br />
                  project.
                </h1>
                <Selector
                  items={['API', 'Marketing', 'Sport', 'Music and Entertainment', 'Social Media']}
                />
              </div>
            </div>
            <div className="calc-price col-xl-7">Hello there</div>
          </div>
        </div>
      </section>
    );
  }
}
