/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../App.jsx';


describe('App Tests', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<App />).contains(<span className="divider">|</span>)).toBe(true);
  });

  it('should be selectable by class "container"', () => {
    expect(shallow(<App />).is('.container')).toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(mount(<App />).find('.container').length).toBe(1);
  });

});
