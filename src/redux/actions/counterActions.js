import * as actionTypes from '../constants/counterActionTypes';
import { notify } from './notificationActions'

export const increment = () => (dispatch, getState) => {
  dispatch({ type: actionTypes.INC }) 
}

export const decrement = () => (dispatch, getState) => {
  const count = getState().counter.count;
  if(count > 0){
    dispatch({ type: actionTypes.DEC })
  } else {
    dispatch(notify({ message: 'can not go behind 0', _status: 'error'})) 
  }
}

export const reset = () => (dispatch, getState) => {
  dispatch({ type: actionTypes.RESET })
  dispatch(notify({ message: 'reset the counter', _status: 'success'}))
}
