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
import InterestedCard from '../../InterestedCandidates/InterestedCards/InterestedCards';
import InterestedList from '../../InterestedCandidates/InterestedList/InterestedList';
import UserTab from '../../UserTab/UserTab';
import Modal from '../../Components/Modals/Modal';

localStorage.setItem('user', '{ "id": 2, "isadmin": "true" }');
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
  fetchAllInterestdCandidate: jest.fn(),
  declareInterest: jest.fn(),
  partyList: {},
  OfficeList: {},
};

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});

const ProfilePageCont = (
  <Provider store={store}>
    <UserProfile {...props} />
  </Provider>
);

describe('ProifilePage component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(ProfilePageCont);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render party without crashing', () => {
    const wrapper = shallow(<PartyList {...party} />);
    expect(wrapper.find('div'));
  });

  it('should render ReviewedArticles without crashing', () => {
    const wrapper = shallow(<OfficeList {...office} />);
    expect(wrapper.find('div'));
  });
});
describe('<PROFILE CARD />', () => {
  it('should render profile card', () => {
    const wrapper = shallow(
      <ReviewerRequestCard initials="" logoUrl="" hqAddress="" name="" />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
  });
});
describe('<CANDIDATES LIST CARD />', () => {
  it('should render candidates list card', () => {
    const wrapper = shallow(<CandidateList />);
    expect(wrapper.find('div'));
  });
});
describe('<CANDIDATES CARD />', () => {
  it('should render candidates card', () => {
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
describe('<FOOTER />', () => {
  it('should render footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('div'));
  });
});
describe('<BUTTON />', () => {
  it('should render button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('div'));
  });
});
describe('<FORM INPUT />', () => {
  it('should render form input', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find('div'));
  });
});
describe('<LOADER />', () => {
  it('should render loader', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find('div'));
  });
});
describe('<NAVLIST/>', () => {
  it('should render nvalist section', () => {
    const wrapper = shallow(<NavList />);
    expect(wrapper.find('div'));
  });
});
describe('<USER SECTION />', () => {
  it('should render user section', () => {
    const wrapper = shallow(<User />);
    expect(wrapper.find('div'));
  });
});
describe('<HEADER SECTION  />', () => {
  it('should render header section', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('div'));
  });
});
describe('<MODAL SECTION  />', () => {
  it('should render modal section', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.find('div'));
  });
});
describe('<HOWITWORKS SECTION />', () => {
  it('should render howitworks section', () => {
    const wrapper = shallow(<HowItWorks />);
    expect(wrapper.find('div'));
  });
});
describe('<LANDINGPAGE SECTION />', () => {
  it('should render landing page section', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.find('div'));
  });
});
describe('<INTERESTED CARDS />', () => {
  it('should render interested cards', () => {
    const wrapper = shallow(<InterestedCard />);
    expect(wrapper.find('div'));
  });
});
describe('<INTERESTED LIST />', () => {
  it('should render interested cards', () => {
    const propss = {
      fetchAllInterestdCandidate: jest.fn(),
    };
    const wrapper = shallow(<InterestedList {...propss} />);
    expect(wrapper.find('div'));
  });
});
describe('<USERTAB LIST />', () => {
  it('should render interested cards', () => {
    const propss = {
      fetchAllInterestdCandidate: jest.fn(),
    };
    const wrapper = shallow(<UserTab {...propss} />);
    expect(wrapper.find('div'));
  });
});
