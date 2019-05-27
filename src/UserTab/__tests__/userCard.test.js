import types from '../../constants/Party.constants';
import partyReducer from '../../reducers/party.reducers';

describe('reviewer request reducer', () => {
  it('should return the initial state', () => {
    expect(partyReducer(undefined, {})).toEqual({
      partyList: [],
    });
  });

  it('should handle FETCH_PARTY_FAILURE', () => {
    expect(
      partyReducer([], {
        type: types.FETCH_PARTY_FAILURE,
      })
    ).toEqual({});
  });
});
