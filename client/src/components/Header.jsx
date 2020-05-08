/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-container">
        <div className="logo">Shmetsy</div>
        <div className="search-bar-container">
          <input class="search" type="text" placeholder="Search for items or shops"></input>
          <div className="search-button" type="button"><i className="fas fa-search"></i></div>
        </div>
        <div className="icons-container">
          <div className="header-column after-search">
            Sell on Shmetsy
          </div>
          <div className="header-column icons">
            <div className="column-icon">
              <i className="far fars fa-heart"></i>
            </div>
            <div className="text">
              Favorites
            </div>
          </div>
          <div className="header-column icons">
            <div className="column-icon">
              <i className="far fars fa-bell"></i>
            </div>
            <div className="text">
              Notifications
            </div>
          </div>
          <div className="header-column icons">
            <div className="column-icon">
              <i className="fas fars fa-shopping-cart"></i>
            </div>
            <div className="text">
              Cart
            </div>
          </div>
        </div>
        <div className="various-links">
        <div>Jewelry & Accessories</div>
        <div>Clothing & Shoes</div>
        <div>Home & Living</div>
        <div>Wedding & Party</div>
        <div>Toys & Entertainment</div>
        <div>Art & Collectibles</div>
        <div>Craft Supplies</div>
        <div>Vintage</div>
        <div><i class="fas fa-gift"></i> Gifts</div>
        </div>
      </div>
    );
  }
}

export default Header;
