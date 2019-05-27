import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import PartyList from '../../Party/PartyList/PartyList';
import OfficeList from '../../Office/OfficeList/OfficeList';
import UserProfile from '../UserProfile';
import ReviewerRequestCard from '../../Party/PartyCards/PartyCards';
import CandidateList from '../../Candidates/CandidateList';
import Candidates from '../../Candidates/Candidates';
import FeaturedCandidates from '../../Components/FeaturedCandidates/FeaturedCandidates';
import Footer from '../../Components/Footer/Footer';
import Button from '../../Components/Global/Buttons';
import Input from '../../Components/Global/Inputs';
import Loader from '../../Components/Global/Loader';
import NavList from '../../Components/Global/NavList';
import User from '../../Components/Global/User';
import Header from '../../Components/Header/Header';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';
import LandingPage from '../../Components/LandingPage/LandingPage';

const office = {
  name: 'federal',
  type: 'senate',
};
const party = {
  name: 'chuks',
  logoUrl: 'hjkwejheknwjkc',
  hqAddress: '3 bode thomas',
};
const props = {
  fetchAllParty: jest.fn(),
  fetchAllOffice: jest.fn(),
};

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});

const AdminPageCont = (
  <Provider store={store}>
    <UserProfile {...props} />
  </Provider>
);

describe('AdminPage component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(AdminPageCont);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Admin page without crashing', () => {
    localStorage.setItem('user', '{ "id": 2, "passporturl": "url" }');
    const wrapper = shallow(<UserProfile {...props} />);
    expect(wrapper.find('div'));
  });

  it('should render ReviewerRequest without crashing', () => {
    const wrapper = shallow(<PartyList {...party} />);
    expect(wrapper.find('div'));
  });

  it('should render ReviewedArticles without crashing', () => {
    const wrapper = shallow(<OfficeList {...office} />);
    expect(wrapper.find('div'));
  });
});
describe('<REQUEST CARD />', () => {
  it('should render request card', () => {
    const wrapper = shallow(
      <ReviewerRequestCard initials="" logoUrl="" hqAddress="" name="" />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
  });
});
describe('<REQUEST CARD />', () => {
  it('should render request card', () => {
    const wrapper = shallow(<CandidateList />);
    expect(wrapper.find('div'));
  });
});
describe('<REQUEST CARD />', () => {
  it('should render request card', () => {
    const wrapper = shallow(<Candidates />);
    expect(wrapper.find('div'));
  });
});
describe('<REQUEST CARD />', () => {
  it('should render request card', () => {
    const wrapper = shallow(<FeaturedCandidates />);
    expect(wrapper.find('div'));
  });
});
describe('<REQUEST CARD />', () => {
  it('should render request card', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('div'));
  });
});
describe('<REQUEST CARD />', () => {
  it('should render request card', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('div'));
  });
});
describe('<REQUEST CARD />', () => {
  it('should render request card', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find('div'));
  });
});
describe('<REQUEST CARD />', () => {
  it('should render request card', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find('div'));
  });
});
describe('<REQUEST CARD />', () => {
  it('should render request card', () => {
    const wrapper = shallow(<NavList />);
    expect(wrapper.find('div'));
  });
});
describe('<REQUEST CARD />', () => {
  it('should render request card', () => {
    const wrapper = shallow(<User />);
    expect(wrapper.find('div'));
  });
});
describe('<REQUEST CARD />', () => {
  it('should render request card', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('div'));
  });
});
describe('<REQUEST CARD />', () => {
  it('should render request card', () => {
    const wrapper = shallow(<HowItWorks />);
    expect(wrapper.find('div'));
  });
});
describe('<REQUEST CARD />', () => {
  it('should render request card', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.find('div'));
  });
});
