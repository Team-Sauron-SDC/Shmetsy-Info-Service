/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import CheckoutOptions from './components/CheckoutOptions.jsx';

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
      });
  }

  getShopInfo() {
    axios.get(`/product/shop/${this.state.product.shop_id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          shop: response.data[0],
        });
      });
  }

  getColorInfo() {
    axios.get(`/product/colors/${this.state.currentId}`)
      .then((response) => {
        this.setState({
          colors: response.data,
        });
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
    <div className="container">
      <div className="box">
        <div className="header-section">
          <span className="header-text">{this.state.shop.shop_name}</span>
          <span className="divider">|</span>
          <span className="header-text">{this.state.shop.total_sales} sales</span>
          <span className="divider">|</span>
          <span className="header-text stars"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></span>
          <div className="header-product-text">{this.state.product.name}</div>
          <div className="price-text">${((this.state.product.price + this.state.colorModifier) * this.state.quantity).toFixed(2)}
          <span className="in-stock-text"><i className="fas fa-check"></i> In Stock</span>
          </div>
        </div>
      </div>
      <CheckoutOptions
      handleQuantity={this.handleQuantity}
      handleColorChoice={this.handleColorChoice}
      colors={this.state.colors}
      />
    </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
