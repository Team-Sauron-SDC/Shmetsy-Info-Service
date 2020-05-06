/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import React from 'react';
import $ from 'jquery';

class Delivery extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const months = [ "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    const country = String(this.props.location).split(', ')[1];
    const shipDate = new Date();
    shipDate.setDate(shipDate.getDate() + 6);

    return (
      <div className="delivery-container">
        <div className="delivery-row">
          <div className="row-inner">
            <span id="estimated-delivery" onHover>Estimated delivery
              <span id="delivery-description">
              The estimated delivery date is based on your purchase date, the recipient's location, the seller's processing time and location, and the shipping carrier. Other factors—like placing an order on a weekend or a holiday—may end up pushing the arrival of your item beyond the estimated delivery date. It's our hope that your item gets where it's going as soon as possible, but given the factors involved, this is only an estimate
              </span>
            </span>
          </div>
          <div className="row-inner">
            Ready to ship in
          </div>
        </div>
        <div className="delivery-row">
          <div className="row-inner bigger">
          {months[shipDate.getMonth()]} {shipDate.getDate()} - {shipDate.getDate() + 3}
          </div>
          <div className="row-inner bigger">
            1-3 business days
          </div>
        </div>
        <div className="delivery-row second">
          <div className="row-inner">
            From
          </div>
          <div className="row-inner">
            Cost to ship
          </div>
        </div>
        <div className="delivery-row">
          <div className="row-inner bigger">
          {country}
          </div>
          <div className="row-inner bigger">
            free
          </div>
        </div>
      </div>
    );
  }
}

export default Delivery;
