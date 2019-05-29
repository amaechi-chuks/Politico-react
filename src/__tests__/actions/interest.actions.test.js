/* eslint-disable no-dupe-keys */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import actions, {
  postInterestFailure,
  postInterestSuccess,
} from '../../actions/interest.actions';
import types from '../../constants/Interest.constant';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('interest actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action for interest success', async () => {
    const expectedAction = [
      {
        type: types.POST_INTEREST_SUCCESS,
      },
    ];
    const store = mockStore({});

    store.dispatch(postInterestSuccess());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for interest failure', async () => {
    const expectedAction = [
      {
        type: types.POST_INTEREST_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(postInterestFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });
  it('should create an action for interest', async () => {
    const data = {
      office: 1,
      party: 1,
    };
    fetchMock.mock(
      '/api/v1/interest/:id',
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
        type: types.INTEREST_FAILURE,
        payload: {
          scope: 'default',
        },
        type: 'loading-bar/SHOW',
      },
    ];
    const store = mockStore({});

    await window.fetch('/api/v1/interest/:id', {
      method: 'POST',
      headers: {
        Authorization: 'faketoken',
        'Content-Type': 'application/json',
      },
      body: data,
    });

    store.dispatch(actions.declareInterest(data, 1)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
