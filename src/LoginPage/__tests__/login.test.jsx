import React from 'react';
import { shallow } from 'enzyme';
import Login from '../LoginPage';

describe('Login component', () => {
  it('should match snapshot', () => {
    const wrap = <Login />;
    expect(wrap).toMatchSnapshot();
  });
  it('should change state', () => {
    const props = {
      auth: { loading: true, redirect: true, isadmin: false },
    };
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper.find('div'));
    expect(wrapper.state('loginDetails')).toEqual({
      email: '',
      password: '',
    });
  });
});
