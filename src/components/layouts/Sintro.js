/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable linebreak-style */
/* eslint-disable no-new */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { TimelineMax } from 'gsap';
import scrollMagic from 'scrollmagic';
import SIcon from '../items/SIcon';
import { sIntro } from '../../data/index.json';

export default class Sintro extends Component {
  constructor(props) {
    super(props);
    this.controller = new scrollMagic.Controller();
  }

  componentDidMount() {
    const tl = new TimelineMax();
    tl.from('#box', 1, { opacity: 0, scale: 0 });
    tl.from('#d-intro-txt', 1, { x: 200, opacity: 0 });
    tl.from('#d-intro-txt-under-line', 1, { width: 0 }, '=.5');
    tl.from('#d-intro-web', 1, { x: -200, opacity: 0 }, '=-1');
    tl.from('#d-intro-mobile', 1, { x: 200, opacity: 0 }, '=-.7');
    new scrollMagic.Scene({
      triggerElement: '#short-intro',
      triggerHook: 'onLeave',
      duration: '100%',
    })
      .setPin('#short-intro')
      .setTween(tl)
      .addTo(this.controller);
  }

  render() {
    return (
      <section id="short-intro" className="section short-intro">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-6 col-sm-12">
              <h3 id="d-intro-txt">
                {sIntro.title}
                <span id="d-intro-txt-under-line" />
              </h3>
            </div>
            <div className="col-xl-6 col-md-6 col-sm-12">
              <div id="d-intro-web" className="s-intro s-intro-web-mob">
                <div className="s-intro-web-mob-inner">
                  <span className="d-i-web-icon">
                    <i className="fa fa-info" />
                  </span>
                  <h3>{sIntro.section1.title}</h3>
                  <p>{sIntro.section1.description}</p>
                  <div className="d-flex">
                    {sIntro.section1.techList.map((item, i) => (
                      <SIcon
                        key={`key_${i}`}
                        icon={item.icon}
                        styleClass="icon2"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-md-6 col-sm-12">
              <div id="d-intro-mobile" className="s-intro s-intro-api">
                <div className="s-intro-api-inner">
                  <span className="d-i-api-icon">
                    <i className="fa fa-info" />
                  </span>
                  <h3>{sIntro.section2.title}</h3>
                  <p>{sIntro.section2.description}</p>
                  <div className="d-flex">
                    {sIntro.section2.techList.map((item, i) => (
                      <SIcon
                        key={`key_${i}`} 
                        icon={item.icon}
                        styleClass="icon2"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div id="box" className="sqr" /> */}
        </div>
      </section>
    );
  }
}
