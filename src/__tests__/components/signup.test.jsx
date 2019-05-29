import React from 'react';
import { shallow } from 'enzyme';

// Components
import SignupPage from '../../Signup/Signup';

describe('<SignupPage />', () => {
  it('renders login page', () => {
    const props = {
      auth: { loading: true, redirect: true },
    };
    const wrapper = shallow(<SignupPage {...props} />);
    const inputEvent = {
      target: { id: 'email', value: 'mail@mail.com' },
    };
    expect(wrapper.find('div'));
    wrapper.instance().handleChange(inputEvent);
    wrapper.instance().handleClick();
  });
});
