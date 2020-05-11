/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import CheckoutOptions from './CheckoutOptions.jsx';
import Description from './Description.jsx';
import Delivery from './Delivery.jsx';
import Policies from './Policies.jsx';
import Seller from './Seller.jsx';
import Rating from 'react-rating';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: null,
      product: [],
      colors: [],
      shop: [],
      colorModifier: 0,
      quantity: 1,
    };

    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleColorChoice = this.handleColorChoice.bind(this);
  }

  componentDidMount() {
    const url = window.location.pathname;
    const id = url.substr(1, url.length - 2);
    this.setState({
      currentId: id,
    }, () => {
      this.getProductInfo();
      this.getColorInfo();
    });
  }

  getProductInfo() {
    axios.get(`/product/${this.state.currentId}`)
      .then((response) => {
        this.setState({
          product: response.data[0],
        }, () => {
          this.getShopInfo();
        });
      })
      .catch((err) => {
        console.error("Error in axios request: ", err);
      });
  }

  getShopInfo() {
    axios.get(`/product/shop/${this.state.product.shop_id}`)
      .then((response) => {
        this.setState({
          shop: response.data[0],
        });
      })
      .catch((err) => {
        console.error("Error in axios request: ", err);
      });
  }

  getColorInfo() {
    axios.get(`/product/colors/${this.state.currentId}`)
      .then((response) => {
        this.setState({
          colors: response.data,
        });
      })
      .catch((err) => {
        console.error("Error in axios request: ", err);
      });
  }

  handleColorChoice(val) {
    this.setState({
      colorModifier: val,
    });
  }

  handleQuantity(val) {
    this.setState({
      quantity: val,
    });
  }

  render() {
    return (
    <div className="mta-container">
      <div className="mta-box">
        <div className="mta-header-section">
          <span className="mta-header-text">{this.state.shop.shop_name}</span>
          <span className="mta-divider">|</span>
          <span className="mta-header-text">{this.state.shop.total_sales} sales</span>
          <span className="mta-divider">|</span>
          <span className="mta-header-text mta-stars"><Rating initialRating={this.state.product.rating} readonly={true} emptySymbol="fa fa-star-o" fullSymbol="fa fa-star"/></span>
          <div className="mta-header-product-text">{this.state.product.name}</div>
          <div className="mta-price-text">${((this.state.product.price + this.state.colorModifier) * this.state.quantity).toFixed(2)}
          <span className="mta-in-stock-text"><i className="fas fa-check"></i> In Stock</span>
          </div>
        </div>
      </div>
      <CheckoutOptions
      handleQuantity={this.handleQuantity}
      handleColorChoice={this.handleColorChoice}
      colors={this.state.colors}
      />
      <Description
      description={this.state.product.description}
      />
      <Delivery
      location={this.state.shop.location}
      />
      <Policies
      name={this.state.shop.shop_name}
      />
      <Seller
      seller={this.state.shop}
      name={this.state.shop.owner_name}
      shop_name={this.state.shop.shop_name}
      />
    </div>
    );
  }
}

export default App;
