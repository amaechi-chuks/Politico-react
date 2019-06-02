import { notify } from 'react-notify-toast';
import actions from '../constants/Admin.contants';
import authServices from '../services/http.service';
import handleErrorMessage from '../helpers/handleErrorMessage.js';

export const contentLoading = () => {
  return {
    type: actions.BEGIN_LOADING,
  };
};

export const updatePartySuccess = partyId => {
  return {
    type: actions.UPDATE_PARTY_SUCCESS,
    partyId,
  };
};

export const updatePartyFailure = () => {
  return {
    type: actions.UPDATE_PARTY_FAILURE,
  };
};

export const createPartySuccess = () => {
  return {
    type: actions.CREATE_PARTY_SUCCESS,
  };
};

export const createPartyFailure = () => {
  return {
    type: actions.CREATE_PARTY_FAILURE,
  };
};

export const createOfficeSuccess = () => {
  return {
    type: actions.CREATE_OFFICE_SUCCESS,
  };
};

export const createOfficeFailure = () => {
  return {
    type: actions.CREATE_OFFICE_FAILURE,
  };
};
const editParty = (partyId, partyName) => {
  return async dispatch => {
    if (!navigator.onLine) {
      notify.show('Please check your internet connection', 'error');
    }
    try {
      dispatch(contentLoading());
      const { data } = await authServices.patchItem(
        `parties/${partyId}`,
        partyName
      );

      dispatch(updatePartySuccess(data.data));
      notify.success('You have successfuly updated this party', 'sucess');
    } catch (error) {
      dispatch(updatePartyFailure());
      handleErrorMessage(error);
    }
  };
};

const createParty = partyDetails => {
  if (!navigator.onLine) {
    notify.show('Please check your internet connection', 'error');
  }
  return async dispatch => {
    try {
      dispatch(contentLoading());
      const data = await authServices.postItem(`/parties`, partyDetails);
      dispatch(createPartySuccess(data));
      if (data.status === 201) {
        return notify.show('You have successfully created a party', 'success');
      }
      dispatch(createPartyFailure(data));
      if (data.status >= 400) {
        return notify.show(handleErrorMessage(data.error), 'error');
      }
    } catch (error) {
      return notify.show(handleErrorMessage(error), 'error');
    } finally {
      dispatch(createPartyFailure());
    }
    return dispatch(createPartyFailure());
  };
};

const createOffice = officeDetails => {
  if (!navigator.onLine) {
    notify.show('Please check your internet connection', 'error');
  }
  return async dispatch => {
    try {
      dispatch(contentLoading());
      const data = await authServices.postItem(`/offices`, officeDetails);
      dispatch(createOfficeSuccess(data));
      if (data.status === 201) {
        return notify.show('You have successfully reated an office', 'success');
      }
      dispatch(createOfficeFailure(data));
      if (data.status >= 400) {
        return notify.show(handleErrorMessage(data.error), 'error');
      }
    } catch (error) {
      return notify.show(handleErrorMessage(error), 'error');
    } finally {
      dispatch(createOfficeFailure());
    }
    return dispatch(createOfficeFailure());
  };
};
const adminUpdateParty = {
  editParty,
  createParty,
  createOffice,
};

export default adminUpdateParty;
