/* eslint-disable no-dupe-keys */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import actions, {
  createPartySuccess,
  createPartyFailure,
  updatePartySuccess,
  updatePartyFailure,
  createOfficeSuccess,
  createOfficeFailure,
  deletePartySuccess,
  deletePartyFailure,
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
        type: types.CREATE_PARTY_FAILURE,
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
        type: types.CREATE_PARTY_FAILURE,
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
describe('update party actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });
  it('should update  party success', async () => {
    const expectedAction = [
      {
        type: types.UPDATE_PARTY_SUCCESS,
      },
    ];
    const store = mockStore({});

    store.dispatch(updatePartySuccess());
    expect(store.getActions()).toEqual(expectedAction);
  });
  it('should update  party failure', async () => {
    const expectedAction = [
      {
        type: types.UPDATE_PARTY_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(updatePartyFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });
  it('should create an action for update party', async () => {
    const data = {
      name: 'Chuks',
    };
    fetchMock.mock(
      'parties/:id`',
      {
        status: 200,
        body: data,
      },
      {
        method: 'PATCH',
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

    await window.fetch('/parties/:id`', {
      method: 'PATCH',
      headers: {
        Authorization: 'faketoken',
        'Content-Type': 'application/json',
      },
      body: data,
    });

    store.dispatch(actions.editParty(data)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
describe('create office actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action for create office success', async () => {
    const expectedAction = [
      {
        type: types.CREATE_OFFICE_SUCCESS,
      },
    ];
    const store = mockStore({});

    store.dispatch(createOfficeSuccess());
    expect(store.getActions()).toEqual(expectedAction);
  });
  it('should create an action for office failure', async () => {
    const expectedAction = [
      {
        type: types.CREATE_OFFICE_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(createOfficeFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });
  it('should create an action for create office', async () => {
    const data = {
      type: 'federal',
      name: 'chiarman',
    };
    fetchMock.mock(
      'offices`',
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
        type: types.CREATE_OFFICE_FAILURE,
        payload: {
          scope: 'default',
        },
        type: 'loading-bar/SHOW',
      },
    ];
    const store = mockStore({});

    await window.fetch('/offices`', {
      method: 'POST',
      headers: {
        Authorization: 'faketoken',
        'Content-Type': 'application/json',
      },
      body: data,
    });

    store.dispatch(actions.createOffice(data)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
describe('delete party actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action for dlete party success', async () => {
    const expectedAction = [
      {
        type: types.DELETE_PARTY_SUCCESS,
      },
    ];
    const store = mockStore({});

    store.dispatch(deletePartySuccess());
    expect(store.getActions()).toEqual(expectedAction);
  });
  it('should create an action for interest failure', async () => {
    const expectedAction = [
      {
        type: types.DELETE_PARTY_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(deletePartyFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });
  it('should create an action for delete party', async () => {
    fetchMock.mock(
      'parties/:id`',
      {
        status: 201,
      },
      {
        method: 'DELETE',
        headers: {
          Authorization: 'faketoken',
          'Content-Type': 'application/json',
        },
      }
    );
    const expectedAction = [
      {
        type: types.CREATE_PARTY_FAILURE,
        payload: {
          scope: 'default',
        },
        type: 'loading-bar/SHOW',
      },
    ];
    const store = mockStore({});

    await window.fetch('/parties/:id`', {
      method: 'DELETE',
      headers: {
        Authorization: 'faketoken',
        'Content-Type': 'application/json',
      },
    });

    store.dispatch(actions.deleteParty()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
