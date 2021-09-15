import * as actionTypes from '../constants/todoActionTypes';

const initialState = { todos: [] };
const reducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case actionTypes.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    case actionTypes.TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map(todo => 
            todo.id === action.payload.id 
          ? {...todo, completed:  action.payload.checked} 
          : todo) 
      }
    default: 
      return state
  }
}

export default reducer
