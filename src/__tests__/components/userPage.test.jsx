import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import UserPage from '../../Userprofile/UserProfile';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});
localStorage.setItem('user', '{ "id": 2, "passporturl": "url" }');
const props = {
  fetchAllParty: jest.fn(),
  fetchAllOffice: jest.fn(),
  fetchAllInterestdCandidate: jest.fn(),
  partyList: jest.fn(),
  editParty: jest.fn(),
  createParty: jest.fn(),
  officeList: jest.fn(),
  interestList: jest.fn(),
  declareInterest: jest.fn(),
  fetchInterestList: jest.fn(),
};

const UserPageComponent = (
  <Provider store={store}>
    <UserPage {...props} />
  </Provider>
);

describe('<UserPage />', () => {
  it('renders UserPage', () => {
    const wrapper = shallow(UserPageComponent);
    expect(wrapper.find('div')).toEqual({});
  });
});

describe('<UserPage />', () => {
  it('renders UserPage', () => {
    const inputEvent = {
      file: [{}],
    };
    const wrapper = shallow(<UserPage {...props} />);
    expect(wrapper.find('div'));
    expect(wrapper.state('currentTab')).toBe('party-section');
    wrapper.instance().changeTab('office-section');
    expect(wrapper.state('currentTab')).toBe('office-section');
    wrapper.instance().changeTab('candidate-section');
    expect(wrapper.state('currentTab')).toBe('candidate-section');
    wrapper.instance().changeTab('create-party-section');
    expect(wrapper.state('currentTab')).toBe('create-party-section');
    wrapper.instance().handleChange(inputEvent);
  });
});
