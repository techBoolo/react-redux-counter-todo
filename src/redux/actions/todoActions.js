import * as actionTypes from '../constants/todoActionTypes'
export const addTodo = (_todo) => ( dispatch, getState ) => {
  dispatch({ type: actionTypes.ADD_TODO, payload: _todo })   
}
export const removeTodo = (id) => (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_TODO, payload: id }) 
}
export const toggleCompleted = (id, checked) => (dispatch) => {
  dispatch({ type: actionTypes.TOGGLE_COMPLETED, payload: { id, checked}})
}
