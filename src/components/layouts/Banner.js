/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';
import { banner, general } from '../../data/index.json';

export default class Banner extends Component {
  componentDidMount() {
    window.$(window).scroll(() => {
      const windowTop = window.$(window).scrollTop() + 1;
      if (windowTop > 850) {
        if (!window.$('#scroll-to-top').hasClass('fix-mouse ')) {
          window.$('#scroll-to-top').addClass('fix-mouse animated fadeInDown');
        }
      } else if (window.$('#scroll-to-top').hasClass('fix-mouse')) {
        window.$('#scroll-to-top').removeClass('fix-mouse animated fadeInDown');
      }
    });
  }

  goTop(e) {
    e.preventDefault();
    window.$('html,body').animate(
      {
        scrollTop: -2,
      },
      3000,
      'easeInOutExpo',
    );
  }

  render() {
    return (
      <div className="banner" data-stellar-background-ratio="0.5">
        <div className="banner-content">
          <div className="overlay" />
          <div className="overlay-2" />
          <div className="container">
            <div className="row no-gutters slider-text align-items-center">
              <div className="col-md-8 ftco-animate d-flex align-items-end">
                <div className="text w-100 banner-text-iner">
                  <h3>
                    {banner.introTxt}
                    <strong>{banner.nameTxt}</strong>
                  </h3>
                  <h1 className="mb-4 expand">{banner.bannertxt}</h1>
                  <p>
                    <a href="#" className="btn-1 py-3 px-4">
                      {general.contactBtnTxt}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="scroll-to-top" className="mouse">
            <a href="#" className="mouse-icon">
              <div onClick={this.goTop} className="mouse-wheel">
                <span className="fa fa-chevron-down" />
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
