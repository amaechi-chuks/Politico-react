import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import actions, {
  signupSuccess,
  signupFailure,
} from '../../actions/auth.actions';
import types from '../../constants/user.constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('auth actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action to signup', async () => {
    fetchMock.mock(
      '/api/v1/auth/signup',
      {
        status: 201,
        body: [{ token: 'faketoken', user: {} }],
      },
      {
        method: 'POST',
        name: 'signup',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const userData = {
      firstName: 'chuks',
      lastName: 'name',
      otherName: 'frank',
      phoneNumber: '09898989899',
      email: 'amaechihdud@yahoo.com',
      password: '33344344443333',
    };

    await window.fetch('/api/v1/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const expectedAction = [
      {
        type: types.BEGIN_LOADING,
      },
    ];

    const store = mockStore({});

    store.dispatch(actions.signup()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should create for signup success', async () => {
    const token = 'faketoken';
    const expectedAction = [
      {
        type: types.SIGNUP_SUCCESS,
        token,
      },
    ];
    const store = mockStore({});

    store.dispatch(signupSuccess(token));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for signup failure', async () => {
    const expectedAction = [
      {
        type: types.SIGNUP_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(signupFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });
});
