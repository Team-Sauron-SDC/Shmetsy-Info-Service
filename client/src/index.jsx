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
        <div className="labels">
          <ul>
            <li>id: </li>
            <li>name: </li>
            <li>shop_id: </li>
            <li>price: </li>
            <li>description: </li>
          </ul>
        </div>
        <div className="values">
          <ul>
            <li>{this.state.product.id}</li>
            <li>{this.state.product.name}</li>
            <li>{this.state.product.shop_id}</li>
            <li>{this.state.product.price}</li>
            <li>{this.state.product.description}</li>
          </ul>
        </div>
    </div>
      <div className="box">
        <div className="labels">
          <ul>
          </ul>
        </div>
        <div className="values">
          <ul>
          </ul>
        </div>
      </div>
    </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
