import { toast } from 'react-notify-toast';
import actions from '../constants/Admin.contants';
import authServices from '../services/http.service';
import handleErrorMessage from '../helpers/handleErrorMessage.js';

export const updatePartySuccess = id => {
  return {
    type: actions.UPDATE_PARTY_SUCCESS,
    id,
  };
};

export const updatePartyFailure = () => {
  return {
    type: actions.UPDATE_PARTY_FAILURE,
  };
};

const editParty = (partyId, partyName) => {
  return async dispatch => {
    if (!navigator.onLine) {
      toast.error('Please check your internet connection');
    }
    try {
      const data = await authServices.patchItem(
        `parties/${partyId}`,
        partyName
      );
      dispatch(updatePartySuccess(data.data));
      toast.success(`You have successfuly updated this party `, {
        type: toast.TYPE.INFO,
        closeButton: true,
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      dispatch(updatePartyFailure());
      handleErrorMessage(error);
    }
  };
};

const adminUpdateParty = {
  editParty,
};

export default adminUpdateParty;
