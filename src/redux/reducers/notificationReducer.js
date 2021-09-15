import * as actionTypes from '../constants/notificationActionTypes' 

const notificationReducer = (state={ notification: {}}, action) => {
  switch(action.type) {
    case actionTypes.NOTIFY:
      return {
        ...state,
        notification: action.payload
      }
    default: 
      return state
  }
} 

export default notificationReducer;
