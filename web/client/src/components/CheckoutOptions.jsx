/* eslint-disable arrow-body-style */
/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import React from 'react';


class CheckoutOptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colorModifier: 1,
      quantity: 1,
    };

    this.handleColorChoice = this.handleColorChoice.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
  }

  handleColorChoice(e) {
    this.setState({
      colorModifier: Number(e.target.value),
    }, () => {
      this.props.handleColorChoice(this.state.colorModifier);
    });
  }

  handleQuantity(e) {
    this.setState({
      quantity: Number(e.target.value),
    }, () => {
      this.props.handleQuantity(this.state.quantity);
    });
  }

  render() {
    const quantityOptions = [];
    for (let i = 2; i < 21; i += 1) {
      quantityOptions.push(i);
    }

    return (
      <div className="mta-checkout-options-container">
          {/* DROP DOWN OPTIONS */}
          <label className="mta-select-label">Color</label>
          <select id="mta-select-color" onChange={this.handleColorChoice}>
            <option value="">Select a Color</option>
            {this.props.colors.map((color) => {
              return (
                <option key={color.id} value={color.price_modifier}>{color.color_name}</option>
              );
            })}
          </select>
          <label className="mta-select-label">Quantity</label>
          <select id="mta-select-color" onChange={this.handleQuantity}>
            <option className="mta-select-value" value="1"> 1</option>
            {quantityOptions.map((num) => {
              return (
                <option key={num} className="mta-select-value" value={num}> {num}</option>
              );
            })}
          </select>
          {/* BUTTONS */}
          <button className="mta-btn mta-buy-it-now-button">Buy it now</button>
          <button className="mta-btn mta-add-to-cart-button">Add to cart</button>
          {/* BELOW BUTTON TEXT */}
          <div className="mta-below-text-container">
            <div className="mta-below-text">
              <img src="https://shmetsy.s3.us-east-2.amazonaws.com/cart.png"></img>
              <div className="mta-below-text-letters">
              <span className="mta-bolder">Other people want this!</span> Over 20 people have this in their carts right now.
              </div>
            </div>
            <div className="mta-below-text">
              <img src="https://shmetsy.s3.us-east-2.amazonaws.com/truck.png"></img>
              <div className="mta-below-text-letters">
                <span className="mta-bolder">Nice choice!</span> Enjoy free shipping to the US when you spend $35+ at this shop.
              </div>
            </div>
          </div>
          {/* HANDMADE ICON */}
          <div className="mta-handmade-container">
            <img src="https://shmetsy.s3.us-east-2.amazonaws.com/hand.png"></img>
            <div className="mta-handmade-text">
            Handmade
            </div>
          </div>
      </div>
    );
  }
}

export default CheckoutOptions;
