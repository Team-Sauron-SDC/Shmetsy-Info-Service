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
    $('.modal-background').css('visibility', 'visible');
    $('.modal').css('display', 'block');
  }

  handleExit() {
    $('.modal-background').css('visibility', 'hidden');
    $('.modal').css('display', 'none');
  }

  render() {
    return (
      <div className="policies-container">
        <div className="modal-background"></div>
        <a className="learn-more-btn" onClick={this.handleClick}>View shop policies</a>
        <div className="modal policies">
          <button className="exit-button" onClick={this.handleExit}>X</button>
          <div className="policies-header">
            Shop policies for {this.props.name}
          </div>
          <div className="policies-header pad">
            Payments
          </div>
          <div className="policies-subheader">
          <i className="fas fa-lock"></i> Secure options
          </div>
          <div className="payment-methods">
            <img src="https://shmetsy.s3.us-east-2.amazonaws.com/payments.png"/>
          </div>
          <div className="payment-subtext">
            Accepts Shmetsy Gift Cards and Shmetsy Credits
          </div>
          <div className="normal-text">
            Shmetsy keeps your payment information secure. Shmetsy shops never receive your credit card information.
          </div>
        </div>
      </div>
    );
  }
}

export default Policies;
