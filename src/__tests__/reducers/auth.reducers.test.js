import authReducer from '../../reducers/auth.reducers';
import actions from '../../constants/user.constants';

describe('auth reducers', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual({
      loading: false,
      isadmin: false,
      redirect: false,
      token: null,
    });
  });

  it('should handle BEGIN_LOADING', () => {
    expect(
      authReducer([], {
        type: actions.BEGIN_LOADING,
      })
    ).toEqual({
      loading: true,
    });
  });

  it('should handle LOGIN_FAILURE', () => {
    expect(
      authReducer([], {
        type: actions.LOGIN_FAILURE,
      })
    ).toEqual({
      loading: false,
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    expect(
      authReducer([], {
        type: actions.LOGIN_SUCCESS,
        token: 'faketoken',
      })
    ).toEqual({
      loading: false,
      redirect: true,
      token: 'faketoken',
    });
  });

  it('should handle LOGIN_SUCCESS_ADMIN', () => {
    expect(
      authReducer([], {
        type: actions.LOGIN_SUCCESS_ADMIN,
        token: 'faketoken',
      })
    ).toEqual({
      loading: false,
      isadmin: true,
      redirect: true,
      token: 'faketoken',
    });
  });

  it('should handle LOGOUT', () => {
    expect(
      authReducer([], {
        type: actions.LOGOUT,
      })
    ).toEqual({
      redirect: false,
      isadmin: false,
      token: null,
    });
  });
});
