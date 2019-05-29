/* eslint-disable no-dupe-keys */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import actions, {
  fetchPartyFailure,
  fetchPartySuccess,
} from '../../actions/party.actions';
import types from '../../constants/Party.constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('party actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action for party success', async () => {
    const expectedAction = [
      {
        type: types.FETCH_PARTY_SUCCESS,
      },
    ];
    const store = mockStore({});

    store.dispatch(fetchPartySuccess());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for party failure', async () => {
    const expectedAction = [
      {
        type: types.FETCH_PARTY_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(fetchPartyFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });
  it('should create an action for party success', async () => {
    const expectedAction = [
      {
        type: types.FETCH_PARTY_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(actions.fetchAllParty());
    expect(store.getActions()).toEqual(expectedAction);
  });
});
