import actions from '../constants/Party.constants';
import authService from '../services/http.service';
import handleErrorMessage from '../helpers/handleErrorMessage.js';

export const fetchPartySuccess = request => {
  return {
    type: actions.FETCH_PARTY_SUCCESS,
    request,
  };
};

export const fetchPartyFailure = () => {
  return {
    type: actions.FETCH_PARTY_FAILURE,
  };
};

const fetchAllParty = () => {
  return async dispatch => {
    try {
      const { data } = await authService.fetchItem(`/parties`);
      return dispatch(fetchPartySuccess(data));
    } catch (error) {
      return handleErrorMessage(error);
    } finally {
      dispatch(fetchPartyFailure());
    }
  };
};

const PartyAction = {
  fetchAllParty,
};

export default PartyAction;
