import { notify } from 'react-notify-toast';
import actions from '../constants/Interest.constant';
import authService from '../services/http.service';
import handleErrorMessage from '../helpers/handleErrorMessage.js';

export const postInterestSuccess = request => {
  return {
    type: actions.POST_INTEREST_SUCCESS,
    request,
  };
};

export const postInterestFailure = () => {
  return {
    type: actions.POST_INTEREST_FAILURE,
  };
};

const declareInterest = (id, interestDetails) => {
  return async dispatch => {
    try {
      const interestData = {
        office: parseInt(interestDetails.office, 10),
        party: parseInt(interestDetails.party, 10),
      };
      const data = await authService.postItem(`/interest/${id}`, interestData);
      dispatch(postInterestSuccess(data));
      if (data.status === 201) {
        return notify.show('Thank you for showing interest', 'success');
      }
      if (data.status >= 400) {
        return notify.show(handleErrorMessage(data.error), 'error');
      }
    } catch (error) {
      return notify.show(handleErrorMessage(error), 'error');
    } finally {
      dispatch(postInterestFailure());
    }
    return dispatch(postInterestFailure());
  };
};

const DeclareInterestAction = {
  declareInterest,
};

export default DeclareInterestAction;
