/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Description from '../Description.jsx';


describe('Description Tests', async () => {
  const props = {
    description: "lorem ipsum blah blah blah",
  };

  const tester = shallow(<Description {...props} />);
  const mountTester = mount(<Description {...props} />);

  it('should render without throwing an error', async () => {
    expect(await tester.contains(<div className="handmade-text header">Description</div>)).toBe(true);
  });

  it('should be selectable by class "description-container"', async () => {
    expect(await tester.is('.description-container')).toBe(true);
  });

  it('should mount in a full DOM', async () => {
    expect(await mountTester.find('.description-container').length).toBe(1);
  });
});
