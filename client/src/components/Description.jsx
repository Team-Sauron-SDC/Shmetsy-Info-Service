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
        $('.mta-fader').css('display', 'none');
        $('#mta-text-box').addClass('mta-full-text-box').removeClass('mta-description-text-box');
        $('.mta-learn-more-btn').html('Less');
      });
    } else {
      this.setState({
        show: false,
      }, () => {
        $('#mta-text-box').removeClass('mta-full-text-box').addClass('mta-description-text-box');
        $('.mta-fader').css('display', 'block');
        $('.mta-learn-more-btn').html('Learn more about this item');
      });
    }
  }


  render() {
    return (
      <div className="mta-description-container">
        <div className="mta-handmade-text mta-header">
          Description
        </div>
        <div id="mta-text-box" className="mta-description-text-box">
          <div className="mta-description-text">
            {this.props.description}
          </div>
          <p className="mta-fader"></p>
        </div>
        <div className="mta-btn-container">
          <a className="mta-learn-more-btn" onClick={this.handleClick}>
          Learn more about this item
          </a>
        </div>
      </div>
    );
  }
}

export default Description;
