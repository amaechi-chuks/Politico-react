import React from 'react';
import { shallow } from 'enzyme';

// Components
import CreateOfficeForm from '../../Office/CreateOffice/CreateOfficeForm';

localStorage.setItem('user', '{ "id": 2, "passporturl": "url" }');
describe('<INTEREST FROM />', () => {
  it('renders login page', () => {
    const props = {
      loading: true,
      createOffice: jest.fn(),
    };
    const wrapper = shallow(<CreateOfficeForm {...props} />);
    const inputEvent = {
      target: { id: 'createOfficeDetails', value: 'federal' },
    };

    expect(wrapper.find('div'));
    wrapper.instance().handleChange(inputEvent);
    wrapper.instance().handleClick();
  });
});
