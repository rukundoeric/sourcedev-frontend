/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import SIcon from '../items/SIcon';
import logo from '../../assets/imgs/logo1.svg';
import eric from '../../assets/imgs/eric.jpg';
import { general } from '../../data/index.json';

export default class ContactUs extends Component {
  componentDidMount() {
    window.$('#contact-us-btn').on('click', (e) => {
      e.preventDefault();
      if (
        window.$('.contact-us-inner')[0].classList.contains('open-contactus')
      ) {
        // window.$(".contact-us-inner")[0].classList.add("close-contactus");
        // setTimeout(() => {
        window.$('.contact-us-inner')[0].classList.remove('open-contactus');
        //   }, 1000);
      } else {
        // window.$(".contact-us-inner")[0].classList.remove("close-contactus");
        window.$('.contact-us-inner')[0].classList.add('open-contactus');
      }
    });
  }

  render() {
    return (
      <div className="contactUs">
        <div className="contact-us-inner">
          <div className="top-side">
            <p>
              <strong>Hi there!</strong>
            </p>
          </div>
          <div className="info-side d-flex justfy-content-center align-items-center">
            <div className="info-side-inner d-flex">
              <img src={logo} alt="" />
              <SIcon icon="fa fa-chevron-right" styleClass="icon6" />
              <div className="social-m d-flex">
                {general.socialMedia.map((item, i) => (
                  <SIcon key={`key_${i}`} icon={item.icon} styleClass="icon5" />
                ))}
              </div>
            </div>
          </div>
          <div className="info-side-2 d-flex justfy-content-center align-items-center">
            <div className="info-side-inner d-flex">
              <img src={eric} alt="" />
              <div className="sms-m d-flex">
                <p>
                  Hello, We are here to help you bring your product to life,
                  please let us know if we can help, we will be grad to discuss
                  the project with you.
                </p>
              </div>
            </div>
          </div>
          <div className="contact-side">
            <div className="message-inner ml-3 mt-3 mr-3">
              <textarea type="text" placeholder="Message" />
            </div>
            <div className="email-inner ml-3 mr-3 d-flex">
              <input type="email" placeholder="Enter your email" />
              <a href="" className="btn-send">
                Send
              </a>
            </div>
          </div>
        </div>
        <SIcon
          elmId="contact-us-btn"
          styleClass="icon4"
          icon="far fa-envelope-open"
        />
      </div>
    );
  }
}
