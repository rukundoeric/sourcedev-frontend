/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import logo from '../../assets/imgs/logo1.svg';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
              <div className="logo" href="#">
                <img src={logo} alt="logo" />
                <span>SourceDev</span>
              </div>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <ul className="ftco-footer-social p-0">
                <li className="ftco-animate">
                  <a href="#" title="Twitter">
                    <span className="fa fa-twitter" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#" title="Facebook">
                    <span className="fa fa-facebook" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#" title="Instagram">
                    <span className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
              <h2 className="footer-heading">Latest News</h2>
              <div className="block-21 mb-4 d-flex">
                {/* <a
                  className="img mr-4 rounded"
                  style="background-image: url(assets/imgs/ser-3.jpg);"
                /> */}
                <div className="text">
                  <h3 className="heading">
                    <a href="#">
                      Even the all-powerful Pointing has no control about
                    </a>
                  </h3>
                  <div className="meta">
                    <div>
                      <a href="#">
                        <span className="icon-calendar" />
                        April 7, 2020
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="icon-person" />
                        Admin
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="icon-chat" />
                        19
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block-21 mb-4 d-flex">
                {/* <a
                  className="img mr-4 rounded"
                  style="background-image: url(assets/imgs/ser-4.jpg);"
                /> */}
                <div className="text">
                  <h3 className="heading">
                    <a href="#">
                      Even the all-powerful Pointing has no control about
                    </a>
                  </h3>
                  <div className="meta">
                    <div>
                      <a href="#">
                        <span className="icon-calendar" />
                        April 7, 2020
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="icon-person" />
                        Admin
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="icon-chat" />
                        19
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
              <h2 className="footer-heading">Quick Links</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="py-2 d-block">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Works
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
              <h2 className="footer-heading">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <a href="#">
                      <span className="icon fa fa-phone" />
                      <span className="text">+250 781 049 218</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon fa fa-paper-plane" />
                      <span className="text">sourcedev@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <a href="#" className="py-2 btn-1">
                  Taly To Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
