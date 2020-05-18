/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import React from 'react';

class Seller extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const url = this.props.seller.owner_url;
    return (
      <div className="mta-seller-container">
        <div className="mta-meet">
          Meet your seller
        </div>
        <div className="mta-seller-info-container">
          <div className="mta-seller-img-container">
            <img src={`${url}`}/>
          </div>
          <div className="mta-seller-inner-text">
            <div className="mta-seller-header">
              {this.props.seller.owner_name}
            </div>
            <div className="mta-seller-subtext">
              Owner of <span className="mta-link">{this.props.shop_name}</span>
            </div>
          </div>
        </div>
        <button className="mta-btn mta-buy-it-now-button mta-message-btn">Message {this.props.name}</button>
      </div>
    );
  }
}

export default Seller;
