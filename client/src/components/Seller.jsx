/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import React from 'react';

class Seller extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="seller-container">
        <div className="meet">
          Meet your seller
        </div>
        <div className="seller-info-container">
          <div className="seller-img-container">
            <img src={`${this.props.url}`}/>
          </div>
          <div className="seller-inner-text">
            <div className="seller-header">
              {this.props.name}
            </div>
            <div className="seller-subtext">
              Owner of <span className="link">{this.props.shop_name}</span>
            </div>
          </div>
        </div>
        <button class="btn buy-it-now-button message-btn">Message {this.props.name}</button>
      </div>
    );
  }
}

export default Seller;
