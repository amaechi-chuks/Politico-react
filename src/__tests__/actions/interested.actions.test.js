/* eslint-disable no-dupe-keys */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import actions, {
  fetchInterestFailure,
  fetchInterestSuccess,
} from '../../actions/getInterest.actions';
import types from '../../constants/GetInterest.constant';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('candidate actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action for interest success', async () => {
    const expectedAction = [
      {
        type: types.FETCH_INTEREST_SUCCESS,
      },
    ];
    const store = mockStore({});

    store.dispatch(fetchInterestSuccess());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for interest failure', async () => {
    const expectedAction = [
      {
        type: types.FETCH_INTEREST_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(fetchInterestFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });
  it('should create an action for get interested candidate success', async () => {
    const expectedAction = [
      {
        type: types.FETCH_INTEREST_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(actions.fetchAllInterestdCandidate());
    expect(store.getActions()).toEqual(expectedAction);
  });
});
