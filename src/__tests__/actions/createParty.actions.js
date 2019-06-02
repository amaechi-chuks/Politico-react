/* eslint-disable no-dupe-keys */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import actions, {
  createPartySuccess,
  createPartyFailure,
} from '../../actions/admin.actions';
import types from '../../constants/Admin.contants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('create party actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action for create party success', async () => {
    const expectedAction = [
      {
        type: types.CREATE_PARTY_SUCCESS,
      },
    ];
    const store = mockStore({});

    store.dispatch(createPartySuccess());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for interest failure', async () => {
    const expectedAction = [
      {
        type: types.UPDATE_PARTY_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(createPartyFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });
  it('should create an action for create party', async () => {
    const data = {
      name: 'Chuks',
      hqAddress: '45 anyanleye',
      logourl: 'chuksimage.png',
    };
    fetchMock.mock(
      'parties`',
      {
        status: 201,
        body: data,
      },
      {
        method: 'POST',
        headers: {
          Authorization: 'faketoken',
          'Content-Type': 'application/json',
        },
      }
    );
    const expectedAction = [
      {
        type: types.UPDATE_PARTY_FAILURE,
        payload: {
          scope: 'default',
        },
        type: 'loading-bar/SHOW',
      },
    ];
    const store = mockStore({});

    await window.fetch('/parties`', {
      method: 'POST',
      headers: {
        Authorization: 'faketoken',
        'Content-Type': 'application/json',
      },
      body: data,
    });

    store.dispatch(actions.createParty(data)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
