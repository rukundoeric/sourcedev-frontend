/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { services } from '../../data/index.json';
import Service from '../items/Service';

export default class Services extends Component {
  render() {
    return (
      <section className="service-part">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 heading-section text-center ftco-animate mb-5">
              <span className="subheading">{services.sectionName}</span>
              <h3 className="mb-2 mt-3 mb-3">{services.title}</h3>
              <p>{services.subtitle}</p>
            </div>
          </div>
          <div className="row d-flex">
            {services.items.map((item, i) => (
              <Service
                key={`key_${i}`}
                icon={item.icon}
                iconStyle={item.iconStyle}
                title={item.title}
                description={item.description}
                animation={item.animation}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
