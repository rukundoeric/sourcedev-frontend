/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/imgs/logo1.svg';
import { showContactUs, hideContactUs } from '../../redux/action/ui.action';
import blogs from '../../data/blogs';
import FooterBlog from '../items/FooterBlog';
import { general } from '../../data/index.json';
import SIcon from '../items/SIcon';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
              <div className="logo" href="#">
                <img src={logo} alt="logo" />
                <span>SourceDev</span>
              </div>
              <p>Solution for Web & Mobile Software Application Development</p>
              <div className="social-m d-flex">
                {general.socialMedia.map((item, i) => (
                  <SIcon
                    key={`key_${i}`}
                    icon={item.icon}
                    styleClass="icon5"
                    title={item.name}
                    link={item.link}
                  />
                ))}
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
              <h2 className="footer-heading">Latest News</h2>
              {blogs.map((b, i) => (
                <FooterBlog
                  key={`item_${i}`}
                  title={b.title}
                  date={b.date}
                  image={b.image}
                />
              ))}
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-md-0 contact-us-f">
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
                <a
                  href="#"
                  className="py-2 btn-1"
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.showContactUs();
                  }}
                >
                  Talk To Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default connect(null, {
  hideContactUs,
  showContactUs,
})(Footer);
