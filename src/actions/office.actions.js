import actions from '../constants/Office.constants';
import authService from '../services/http.service';
import handleErrorMessage from '../helpers/handleErrorMessage.js';

export const fetchOfficeSuccess = request => {
  return {
    type: actions.FETCH_OFFICE_SUCCESS,
    request,
  };
};

export const fetchOfficeFailure = () => {
  return {
    type: actions.FETCH_OFFICE_FAILURE,
  };
};

const fetchAllOffice = () => {
  return async dispatch => {
    try {
      const { data } = await authService.fetchItem(`/offices`);
      return dispatch(fetchOfficeSuccess(data));
    } catch (error) {
      return handleErrorMessage(error);
    } finally {
      dispatch(fetchOfficeFailure());
    }
  };
};

const OfficeAction = {
  fetchAllOffice,
};

export default OfficeAction;
