import actions from '../constants/GetInterest.constant';
import authService from '../services/http.service';
import handleErrorMessage from '../helpers/handleErrorMessage.js';

export const fetchInterestSuccess = request => {
  return {
    type: actions.FETCH_INTEREST_SUCCESS,
    request,
  };
};

export const fetchInterestFailure = () => {
  return {
    type: actions.FETCH_INTEREST_FAILURE,
  };
};

const fetchAllInterestdCandidate = () => {
  return async dispatch => {
    try {
      const { data } = await authService.fetchItem(`/interest`);
      return dispatch(fetchInterestSuccess(data));
    } catch (error) {
      return handleErrorMessage(error);
    } finally {
      dispatch(fetchInterestFailure());
    }
  };
};

const FetchInterestAction = {
  fetchAllInterestdCandidate,
};

export default FetchInterestAction;
