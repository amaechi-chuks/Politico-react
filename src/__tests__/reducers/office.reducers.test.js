import officeReducer from '../../reducers/office.reducers';
import actions from '../../constants/Office.constants';

describe('office reducers', () => {
  it('should return the initial state', () => {
    expect(officeReducer(undefined, {})).toEqual({
      officeList: [],
    });
  });

  it('should handle FETCH_OFFICE_FAILURE', () => {
    expect(
      officeReducer([], {
        type: actions.FETCH_OFFICE_FAILURE,
      })
    ).toEqual({});
  });
});
