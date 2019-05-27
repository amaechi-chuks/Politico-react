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

const declareInterest = id => {
  return async dispatch => {
    try {
      const data = await authService.postItem(`/interest/${id}`);
      dispatch(postInterestSuccess(data));
      if (data.status === 201) {
        return notify.show('Thank you for showing interest', 'success');
      }
      return notify.show('You have already showed an interest', 'error');
    } catch (error) {
      return handleErrorMessage(error);
    } finally {
      dispatch(postInterestFailure());
    }
  };
};

const DeclareInterestAction = {
  declareInterest,
};

export default DeclareInterestAction;
