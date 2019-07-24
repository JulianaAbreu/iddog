import React from 'react';
import { shallow } from 'enzyme';
import DefaultLayout from '../views/layouts/DefaultLayout';

describe('DefaultLayout', () => {
  it('should be a <h1> element in LogoContent styled component of LayoutWrapper container', () => {
    const history = {};
    const wrapper = shallow(<DefaultLayout history={history} />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
