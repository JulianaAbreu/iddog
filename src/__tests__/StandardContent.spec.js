import React from 'react';
import { shallow } from 'enzyme';

import StandardContent from '../views/components/StandardContent';

describe('Header', () => {
  it('should have a children in Content styled component', () => {
    const children = {
      $$typeof: Symbol(React.element),
      type: () => {},
      key: null,
      ref: null,
      props: { children: { props: {} } },
      _owner: null,
      _store: {},
    };
    const Header = () => {};
    const wrapper = shallow(
      <StandardContent>
        <Header>{children}</Header>
      </StandardContent>,
    );

    expect(wrapper.children().length).toEqual(1);
  });
});
