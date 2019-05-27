import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import partyAction, {
  fetchPartySuccess,
  fetchPartyFailure,
} from '../../actions/party.actions';
import types from '../../constants/Party.constants';

const { fetchAllParty } = partyAction;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('get party actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it.only('should create an action get party success', async () => {
    const expectedAction = [
      {
        type: types.FETCH_PARTY_SUCCESS,
      },
    ];
    const store = mockStore({});

    await store.dispatch(fetchPartySuccess());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for get party failure', async () => {
    const expectedAction = [
      {
        type: types.FETCH_PARTY_FAILURE,
      },
    ];
    const store = mockStore({});

    await store.dispatch(fetchPartyFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for getting all parties ', async () => {
    await fetchMock.mock(
      '/api/v1/parties',
      {
        status: 200,
      },
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'faketoken',
        },
      }
    );

    await window.fetch('/api/v1/parties', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'faketoken',
      },
    });

    const expectedAction = [
      {
        type: types.FETCH_PARTY_FAILURE,
      },
    ];

    const store = mockStore({});

    await store.dispatch(fetchAllParty());
    expect(store.getActions()).toMatchObject(expectedAction);
  });
});
