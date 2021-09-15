import * as actionTypes from '../constants/counterActionTypes';

const counterReducer = (state={ count: 0 }, action) => {
  switch(action.type) {
    case actionTypes.INC:
      return { 
        ...state, 
        count: state.count + 1 
      }
    case actionTypes.DEC:
      return {
        ...state,
        count: state.count - 1
      }
    case actionTypes.RESET:
      return {
        ...state,
        count: 0
      }
    default:
      return state
  }
}

export default counterReducer;
