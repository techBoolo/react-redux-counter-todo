import { combineReducers } from 'redux';
import counterReducer from './reducers/counterReducer';
import todoReducer from './reducers/todoReducer';
import notificationReducer from './reducers/notificationReducer';

const reducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  notification: notificationReducer
})

export default reducer;
