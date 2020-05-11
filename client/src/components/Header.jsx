/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mta-header-container">
        <div className="mta-logo">Shmetsy</div>
        <div className="mta-search-bar-container">
          <input className="mta-search" type="text" placeholder="Search for items or shops"></input>
          <div className="mta-search-button" type="button"><i className="fas fa-search"></i></div>
        </div>
        <div className="mta-icons-container">
          <div className="mta-header-column after-search">
            Sell on Shmetsy
          </div>
          <div className="mta-header-column mta-icons">
            <div className="mta-column-icon">
              <i className="far mta-fars fa-heart"></i>
            </div>
            <div className="mta-text">
              Favorites
            </div>
          </div>
          <div className="mta-header-column mta-icons">
            <div className="mta-column-icon">
              <i className="far mta-fars fa-bell"></i>
            </div>
            <div className="mta-text">
              Notifications
            </div>
          </div>
          <div className="mta-header-column mta-icons">
            <div className="mta-column-icon">
              <i className="fas mta-fars fa-shopping-cart"></i>
            </div>
            <div className="mta-text">
              Cart
            </div>
          </div>
        </div>
        <div className="mta-various-links">
        <div>Jewelry & Accessories</div>
        <div>Clothing & Shoes</div>
        <div>Home & Living</div>
        <div>Wedding & Party</div>
        <div>Toys & Entertainment</div>
        <div>Art & Collectibles</div>
        <div>Craft Supplies</div>
        <div>Vintage</div>
        <div><i className="fas fa-gift"></i> Gifts</div>
        </div>
      </div>
    );
  }
}

export default Header;
