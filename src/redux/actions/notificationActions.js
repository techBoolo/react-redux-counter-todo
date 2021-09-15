import * as actionTypes from '../constants/notificationActionTypes';

export const notify = (data) => (dispatch) => {
  dispatch({ type: actionTypes.NOTIFY, payload: data}) 
  setTimeout(() => {
    dispatch({ type: actionTypes.NOTIFY, payload: {}})
  }, 5000)
}
