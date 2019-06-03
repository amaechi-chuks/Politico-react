import React from 'react';
import { shallow } from 'enzyme';

// Components
import LoginPage from '../../LoginPage/LoginPage';

describe('<LoginPage />', () => {
  it('renders login page', () => {
    const props = {
      auth: { loading: true, redirect: true },
      login: jest.fn(),
    };
    const wrapper = shallow(<LoginPage {...props} />);
    const inputEvent = {
      target: { id: 'email', value: 'mail@mail.com' },
    };
    expect(wrapper.find('div'));
    wrapper.instance().handleChange(inputEvent);
    wrapper.instance().handleClick();
  });
});
