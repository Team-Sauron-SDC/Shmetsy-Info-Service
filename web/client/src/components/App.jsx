/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import Rating from 'react-rating';
import CheckoutOptions from './CheckoutOptions';
import Description from './Description';
import Delivery from './Delivery';
import Policies from './Policies';
import Seller from './Seller';

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
    const { currentId } = this.state;
    axios.get(`/product/${currentId}`)
      .then((response) => {
        this.setState({
          product: response.data[0],
        }, () => {
          this.getShopInfo();
        });
      })
      .catch((err) => {
        console.error('Error in axios request: ', err);
      });
  }

  getShopInfo() {
    const { currentId } = this.state;
    axios.get(`/product/shop/${currentId}`)
      .then((response) => {
        this.setState({
          shop: response.data[0],
        });
      })
      .catch((err) => {
        console.error('Error in axios request: ', err);
      });
  }

  getColorInfo() {
    const { currentId } = this.state;
    axios.get(`/product/colors/${currentId}`)
      .then((response) => {
        this.setState({
          colors: response.data,
        });
      })
      .catch((err) => {
        console.error('Error in axios request: ', err);
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
    const { product } = this.state;
    const { colorModifier } = this.state;
    const { quantity } = this.state;
    const { shop } = this.state;
    const { colors } = this.state;
    return (
      <div className="mta-container">
        <div className="mta-box">
          <div className="mta-header-section">
            <span className="mta-header-text">{shop.shop_name}</span>
            <span className="mta-divider">|</span>
            <span className="mta-header-text">
              {shop.total_sales}
              {' '}
              sales
            </span>
            <span className="mta-divider">|</span>
            <span className="mta-header-text mta-stars"><Rating initialRating={product.rating} readonly emptySymbol="fa fa-star-o" fullSymbol="fa fa-star" /></span>
            <div className="mta-header-product-text">{product.name}</div>
            <div className="mta-price-text">
              $
              {((product.price + colorModifier) * quantity).toFixed(2)}
              <span className="mta-in-stock-text">
                <i className="fas fa-check" />
                {' '}
                In Stock
              </span>
            </div>
          </div>
        </div>
        <CheckoutOptions
          handleQuantity={this.handleQuantity}
          handleColorChoice={this.handleColorChoice}
          colors={colors}
        />
        <Description
          description={product.description}
        />
        <Delivery
          location={shop.location}
        />
        <Policies
          name={shop.shop_name}
        />
        <Seller
          seller={shop}
          name={shop.owner_name}
          shop_name={shop.shop_name}
        />
      </div>
    );
  }
}

export default App;
