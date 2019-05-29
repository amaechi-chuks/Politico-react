/* eslint-disable no-dupe-keys */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import actions, {
  fetchOfficeSuccess,
  fetchOfficeFailure,
} from '../../actions/office.actions';
import types from '../../constants/Office.constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('office actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action for office success', async () => {
    const expectedAction = [
      {
        type: types.FETCH_OFFICE_SUCCESS,
      },
    ];
    const store = mockStore({});

    store.dispatch(fetchOfficeSuccess());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for office failure', async () => {
    const expectedAction = [
      {
        type: types.FETCH_OFFICE_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(fetchOfficeFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });
  it('should create an action for offce success', async () => {
    const expectedAction = [
      {
        type: types.FETCH_OFFICE_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(actions.fetchAllOffice());
    expect(store.getActions()).toEqual(expectedAction);
  });
});
