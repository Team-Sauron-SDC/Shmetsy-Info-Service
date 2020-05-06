/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import React from 'react';
import $ from 'jquery';

class Description extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.state.show) {
      this.setState({
        show: true,
      }, () => {
        $('.fader').css('display', 'none');
        $('#text-box').addClass('full-text-box').removeClass('description-text-box');
        $('.learn-more-btn').html('Less');
      });
    } else {
      this.setState({
        show: false,
      }, () => {
        $('#text-box').removeClass('full-text-box').addClass('description-text-box');
        $('.fader').css('display', 'block');
        $('.learn-more-btn').html('Learn more about this item');
      });
    }
  }


  render() {
    return (
      <div className="description-container">
        <div className="handmade-text header">
          Description
        </div>
        <div id="text-box" className="description-text-box">
          <div className="description-text">
            {this.props.description}
          </div>
          <p class="fader"></p>
        </div>
        <div className="btn-container">
          <a className="learn-more-btn" onClick={this.handleClick}>
          Learn more about this item
          </a>
        </div>
      </div>
    );
  }
}

export default Description;
