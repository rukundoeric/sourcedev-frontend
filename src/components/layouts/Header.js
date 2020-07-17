/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showContactUs } from '../../redux/action/ui.action';
import logo from '../../assets/imgs/logo1.svg';

class header extends Component {
  state={
    activeMenu: 'home',
  }

  componentDidMount() {
    window.$(window).scroll(() => {
      const windowTop = window.$(window).scrollTop() + 1;
      if (windowTop > 150) {
        window
          .$('#nav-bar-header')
          .addClass('header-scrolled animated fadeInDown');
        window.$('#nav-menu-lists').addClass('nav-menu-lists-scrolled');
      } else {
        window
          .$('#nav-bar-header')
          .removeClass('header-scrolled animated fadeInDown');
        window.$('#nav-menu-lists').removeClass('nav-menu-lists-scrolled');
      }
    });
    window.$('#menu-btn-action').on('click', (e) => {
      e.preventDefault();
      if (window.$('.nav-menu-lists')[0].classList.contains('open-menu')) {
        window.$('.nav-menu-lists')[0].classList.remove('open-menu');
        window.$('.nav-icon')[0].classList.remove('open-menu-btn');
      } else {
        window.$('.nav-menu-lists')[0].classList.add('open-menu');
        window.$('.nav-icon')[0].classList.add('open-menu-btn');
      }
    });
  }

  render() {
    const { activeMenu } = this.props;
    return (
      <div>
        <header id="nav-bar-header" className="main_menu">
          <div className="container">
            <div className="row align-items-center">
              <div className="logo" href="#">
                <img src={logo} alt="logo" />
                <span>SourceDev</span>
              </div>
              <div className="menu-btn">
                <div id="menu-btn-action" className="nav-icon">
                  <span className="in-d" />
                </div>
              </div>
              <nav className="nav-links">
                <ul>
                  <li className={activeMenu === 'home' ? 'activepage' : ''}>
                    <a
                      onClick={(e) => {
                        this.props.goto(e, 'body');
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li className={activeMenu === 'service' ? 'activepage' : ''}>
                    <a
                      onClick={(e) => {
                        this.props.goto(e, '.service-part');
                      }}
                    >
                      Services
                    </a>
                  </li>
                  <li
                    className={activeMenu === 'portifolio' ? 'activepage' : ''}
                  >
                    <a
                      onClick={(e) => {
                        this.props.goto(e, '.portfolio_part');
                      }}
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className={activeMenu === 'blog' ? 'activepage' : ''}>
                    <a
                      onClick={(e) => {
                        this.props.goto(e, '.blog_part');
                      }}
                    >
                      Blog
                    </a>
                  </li>
                  <li className={activeMenu === 'about' ? 'activepage' : ''}>
                    <a
                      onClick={(e) => {
                        this.props.goto(e, '.about-part');
                      }}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="btn-1"
                      onClick={(e) => {
                        e.preventDefault();
                        this.props.showContactUs();
                      }}
                    >
                      Talk to us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <nav
          id="nav-menu-lists"
          className="nav-menu-lists close-menu nav-menu-lists-scrolled"
        >
          <div className="container nav-menu-content">
            <nav className="nav-links-menu">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li className="active-menu">
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a
                    href="#"
                    className="btn-1"
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.showContactUs();
                    }}
                  >
                    Talk to us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </nav>
      </div>
    );
  }
}

export default connect(null, {
  showContactUs,
})(header);
