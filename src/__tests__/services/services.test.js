import { setToken, removeToken, getToken } from '../../services/auth.services';

const token = 'token';

describe('services tests', () => {
  it('should set token', () => {
    expect(setToken(token)).toEqual(token);
  });
  it('should remove token', () => {
    expect(removeToken()).toEqual(null);
  });
});
