import React from 'react';
import { shallow } from 'enzyme';

import StandardHeader from '../views/components/StandardHeader';

describe('Header', () => {
  it('should have a children in Header styled component', () => {
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
      <StandardHeader>
        <Header>{children}</Header>
      </StandardHeader>,
    );

    expect(wrapper.children().length).toEqual(1);
  });
});
