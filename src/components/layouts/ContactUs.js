/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable default-case */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { TimelineLite } from 'gsap';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import SIcon from '../items/SIcon';
import logo from '../../assets/imgs/logo1.svg';
import eric from '../../assets/imgs/eric.jpg';
import { hideContactUs, showContactUs } from '../../redux/action/ui.action';
import { contactUs as contactUsSendSMS } from '../../redux/action/user';
import { general } from '../../data/index.json';

const tl = new TimelineLite();

class ContactUs extends Component {
  state = {
    display_contact_us: false,
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    loading: false,
  };

  componentDidMount() {
    window.$('#contact-us-btn').on('click', (e) => {
      e.preventDefault();
      this.handleShowHideContactDes(
        () => {
          this.setState({ display_contact_us: false });
          this.props.hideContactUs();
        },
        () => {
          this.setState({ display_contact_us: true });
          this.props.showContactUs();
        },
      );
    });
    window.$('#contact-us-btn-2').on('click', (e) => {
      e.preventDefault();
      this.handleShowHideContactMob(
        () => {
          this.setState({ display_contact_us: false });
          this.props.hideContactUs();
        },
        () => {
          this.setState({ display_contact_us: true });
          this.props.showContactUs();
        },
      );
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.display_contact_us !== this.state.display_contact_us) {
      if (newProps.display_contact_us === true) {
        if (window.innerWidth > 576) {
          this.handleShowHideContactDes(
            () => {},
            () => {},
          );
        } else {
          this.handleShowHideContactMob(
            () => {},
            () => {},
          );
        }
      }
      this.setState({ display_contact_us: newProps.display_contact_us });
    }
  }

  handleShowHideContactDes = (a, b) => {
    if (window.$('.contact-us-inner')[0].classList.contains('open-contactus')) {
      tl.to('.contact-us-inner', 1, {
        opacity: 0,
        onComplete: () => {
          window.$('.contact-us-inner')[0].classList.remove('open-contactus');
          a();
        },
      });
    } else {
      window.$('.contact-us-inner')[0].classList.add('open-contactus');
      tl.to('.contact-us-inner', 2, {
        opacity: 1,
      });
      b();
    }
  };

  handleShowHideContactMob = (a, b) => {
    if (window.$('.contact-us-inner')[0].classList.contains('open-contactus')) {
      tl.to('.contact-us-inner', 1, {
        opacity: 0,
        onComplete: () => {
          window.$('.contactUs')[0].classList.remove('open-contactus-2');
          window.$('.contact-us-inner')[0].classList.remove('open-contactus');
          a();
        },
      });
    } else {
      window.$('.contactUs')[0].classList.add('open-contactus-2');
      window.$('.contact-us-inner')[0].classList.add('open-contactus');
      tl.to('.contact-us-inner', 2, {
        opacity: 1,
      });
      b();
    }
  };

  handleInputData = (a, b) => {
    a.preventDefault();
    switch (b) {
      case 'firstname': {
        this.setState({
          firstName: a.target.value,
        });
        break;
      }
      case 'lastname': {
        this.setState({
          lastName: a.target.value,
        });
        break;
      }
      case 'email': {
        this.setState({
          email: a.target.value,
        });
        break;
      }
      case 'message': {
        this.setState({
          message: a.target.value,
        });
        break;
      }
    }
  };

  handleContactUsSendSMS = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const {
      firstName, lastName, email, message,
    } = this.state;
    this.props
      .contactUsSendSMS({
        firstName,
        lastName,
        email,
        message,
        subject: 'contact us',
      })
      .then((r) => {
        this.setState({ loading: false });
        if (r.status === 201) {
          if (window.innerWidth > 576) {
            this.handleShowHideContactDes(
              this.props.hideContactUs,
              this.props.showContactUs,
            );
          } else {
            this.handleShowHideContactMob(
              this.props.hideContactUs,
              this.props.showContactUs,
            );
          }
          toast.info('Thank you so much, we will respond with in 2 to 5 hours');
        } else if (r.status === 400) {
          toast.error('Please fill all fields');
        }
      });
  };

  render() {
    const { display_contact_us, loading } = this.state;

    return (
      <div>
        <div className="contactUs">
          <div className="contact-us-inner">
            <div className="top-side">
              {/* <p>
                <strong>Hi there!</strong>
              </p> */}
            </div>
            <div className="info-side d-flex justfy-content-center align-items-center">
              <div className="info-side-inner d-flex">
                <img src={logo} alt="" />
                <SIcon icon="fa fa-chevron-right" styleClass="icon6" />
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
            </div>
            <div className="c-st-12">
              <div className="info-side-2 d-flex justfy-content-center align-items-center">
                <div className="info-side-inner d-flex">
                  <img src={eric} alt="" />
                  <div className="sms-m d-flex">
                    <p>
                      Hello, We are here to help you bring your product to life,
                      please let us know if we can help, we will be grad to
                      discuss the project with you.
                    </p>
                  </div>
                </div>
              </div>
              <div className="contact-side">
                <div className="message-inner ml-3 mt-3 mr-3">
                  <textarea
                    required
                    onChange={(e) => {
                      this.handleInputData(e, 'message');
                    }}
                    type="text"
                    placeholder="Message"
                  />
                </div>
                <div className="name-inner ml-3 mt-3 mr-3">
                  <input
                    required
                    onChange={(e) => {
                      this.handleInputData(e, 'firstname');
                    }}
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    required
                    onChange={(e) => {
                      this.handleInputData(e, 'lastname');
                    }}
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <div className="email-inner ml-3 mr-3 d-flex">
                  <input
                    required
                    onChange={(e) => {
                      this.handleInputData(e, 'email');
                    }}
                    type="email"
                    placeholder="Enter your email"
                  />
                  <a
                    href=""
                    onClick={this.handleContactUsSendSMS}
                    className="btn-send"
                  >
                    {loading ? (
                      <Loader
                        type="ThreeDots"
                        color="#fff"
                        height="30"
                        width="30"
                      />
                    ) : (
                      'Send'
                    )}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <SIcon
            elmId="contact-us-btn"
            styleClass="icon4"
            icon={
              !display_contact_us ? 'far fa-envelope-open' : 'flaticon-cancel'
            }
          />
        </div>
        <SIcon
          elmId="contact-us-btn-2"
          styleClass="icon7"
          icon={
            !display_contact_us ? 'far fa-envelope-open' : 'flaticon-cancel'
          }
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  display_contact_us: state.ui.display_contact_us,
  contactUsResponce: state.user.contactUsResponce,
});

export default connect(mapStateToProps, {
  hideContactUs,
  showContactUs,
  contactUsSendSMS,
})(ContactUs);
