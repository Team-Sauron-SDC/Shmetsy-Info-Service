/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount, render } from 'enzyme';

import CheckoutOptions from '../CheckoutOptions.jsx';


describe('CheckoutOptions Tests', () => {
  const props = {
    colors: [
      {
        id: 1, color_name: "Black", price_modifier: 2, product_id: 1,
      }],
    handleQuantity: () => {
      console.log('pass');
    },
    handleColorChoice: () => {
      console.log('pass');
    },
  };

  const tester = shallow(<CheckoutOptions {...props} />);
  const mountTester = mount(<CheckoutOptions {...props} />);

  it('should render without throwing an error', () => {
    expect(tester.contains(<label className="select-label">Quantity</label>)).toBe(true);
  });

  it('should be selectable by class "checkout-options-container"', () => {
    expect(tester.is('.checkout-options-container')).toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(mountTester.find('.checkout-options-container').length).toBe(1);
  });

});
