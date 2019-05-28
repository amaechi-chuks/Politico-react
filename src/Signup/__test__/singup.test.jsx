import React from 'react';
import { shallow } from 'enzyme';
import Signup from '../Signup';

describe('SIGNUP component', () => {
  it('should match snapshot', () => {
    const wrap = <Signup />;
    expect(wrap).toMatchSnapshot();
  });
  it('should change state', () => {
    const props = {
      auth: { loading: true, redirect: true, isadmin: false },
    };
    const wrapper = shallow(<Signup {...props} />);
    expect(wrapper.find('div'));
    expect(wrapper.state('signupDetails')).toEqual({
      firstName: '',
      lastName: '',
      otherName: '',
      phoneNumber: '',
      email: '',
      password: '',
    });
  });
});
