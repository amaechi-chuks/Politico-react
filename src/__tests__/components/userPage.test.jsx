import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import UserPage from '../../Userprofile/UserProfile';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

const props = {
  fetchAllParty: jest.fn(),
  fetchAllOffice: jest.fn(),
  fetchAllInterestdCandidate: jest.fn(),
  partyList: jest.fn(),
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
