/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import React from 'react';
import $ from 'jquery';

class Policies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  handleClick() {
    $('.mta-modal-background').css('visibility', 'visible');
    $('.mta-modal').css('display', 'block');
  }

  handleExit() {
    $('.mta-modal-background').css('visibility', 'hidden');
    $('.mta-modal').css('display', 'none');
  }

  render() {
    return (
      <div className="mta-policies-container">
        <div className="mta-modal-background"></div>
        <a className="mta-learn-more-btn" onClick={this.handleClick}>View shop policies</a>
        <div className="mta-modal mta-policies">
          <button className="mta-exit-button" onClick={this.handleExit}>X</button>
          <div className="mta-policies-header">
            Shop policies for {this.props.name}
          </div>
          <div className="mta-policies-header mta-pad">
            Payments
          </div>
          <div className="mta-policies-subheader">
          <i className="fas fa-lock"></i> Secure options
          </div>
          <div className="mta-payment-methods">
            <img src="https://shmetsy.s3.us-east-2.amazonaws.com/payments.png"/>
          </div>
          <div className="mta-payment-subtext">
            Accepts Shmetsy Gift Cards and Shmetsy Credits
          </div>
          <div className="mta-normal-text">
            Shmetsy keeps your payment information secure. Shmetsy shops never receive your credit card information.
          </div>
        </div>
      </div>
    );
  }
}

export default Policies;
