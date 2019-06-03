import React from 'react';
import { shallow } from 'enzyme';

// Components
import CreatePartyForm from '../../Party/CreateParty/CreatePartyForm';

describe('<CREATE PARTY PAGE />', () => {
  it('renders login page', () => {
    const props = {
      loading: true,
      fetchAllParty: jest.fn(),
    };
    const wrapper = shallow(<CreatePartyForm {...props} />);
    const inputEvent = {
      target: { id: 'createPartyDetails', value: 'cuhks' },
    };
    const ImageEvent = {
      file: [{}],
      validateImage: {},
    };
    expect(wrapper.find('div'));
    wrapper.instance().handleChange(inputEvent);
    wrapper.instance().handleImageChange(ImageEvent);
    wrapper.instance().handleClick();
  });
});
