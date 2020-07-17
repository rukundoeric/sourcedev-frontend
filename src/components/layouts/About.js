/* eslint-disable react/no-array-index-key */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import aboutImg from '../../assets/imgs/about.jpg';
import AboutFact from '../items/AboutFact';
import { about } from '../../data/index.json';

export default function About() {
  return (
    <section className="about-part ftco-section goto-here">
      <div className="container">
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 mt-5 heading-section text-center ftco-animate mb-5">
              <span className="subheading">{about.sectionName}</span>
            </div>
          </div>
        </div>
        <div className="px-0">
          <div className="row d-sm-flex text-wrapper align-items-stretch">
            <div className="one-half d-flex align-self-stretch">
              <img src={aboutImg} alt="" />
            </div>
            <div className="one-half half-text d-flex justify-content-end align-items-center">
              <div className="text-inner">
                <div className="about_text">
                  <h3>{about.section1.title}</h3>
                  <p>{about.section1.description}</p>
                </div>
                <div className="row d-flex">
                  <div className="col-md-12 title-2">
                    <h3>{about.section2.title}</h3>
                  </div>
                  {about.section2.items.map((item, i) => (
                    <AboutFact
                      key={`key_${i}`}
                      title={item.title}
                      desc={item.description}
                      icon={item.icon}
                      animation={item.animation}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
