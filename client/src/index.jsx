/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: null,
      product: [],
    };
  }

  componentDidMount() {
    const url = window.location.pathname;
    const id = url.substr(1, url.length - 2);
    this.setState({
      currentId: id,
    }, () => {
      this.getProductInfo();
    });
  }

  getProductInfo() {
    console.log(this.state.currentId);
    axios.get(`/product/${this.state.currentId}`)
      .then((response) => {
        console.log(response);
        this.setState({
          product: response.data[0],
        });
      });
  }

  render() {
    return (
    <div className="container">
      <div className="box">
        <div className="header-section">
          <span className="header-text">Shop-Name</span>
          <span className="divider">|</span>
          <span className="header-text">5,000 sales</span>
          <span className="divider">|</span>
          <span className="header-text stars"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></span>
          <div className="header-product-text">{this.state.product.name}</div>
          <div className="price-text">$20.50
          <span className="in-stock-text"><i className="fas fa-check"></i> In Stock</span>
          </div>
        </div>
      </div>
    </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
