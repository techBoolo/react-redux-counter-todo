import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as todoActions from '../../redux/actions/todoActions';
import * as notificationAction from '../../redux/actions/notificationActions';
import styles from './styles';

const AddTodo = () => {
  const [ todo, setTodo ] = useState('');
  const [ showAll, setShowAll ] = useState(true);
  const dispatch = useDispatch();
  const todos = useSelector(state =>  showAll ? state.todo.todos : state.todo.todos.filter(todo => todo.completed));

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if(todo.trim()) {
      const payload = {
        id: Date.now(),
        name: todo.trim(),
        completed: false
      }
      dispatch(todoActions.addTodo(payload)) 
      setTodo('');
    } else {
      dispatch(notificationAction.notify({ message: "please enter todo", _status: 'error'}))
      console.log("error");  
    }
  }

  const handleRemove = (id) => () => {
    dispatch(todoActions.removeTodo(id)); 
  }
  const toggleCompleted = (id, checked) => {
    dispatch(todoActions.toggleCompleted(id, checked)); 
  }
  return (
    <>
      <h4>Todo</h4>
      <form onSubmit={ handleSubmit }>
        <div><input type='text' value={todo} onChange={ev => setTodo(ev.target.value)} /></div>
        <div><button type='submit'>add</button></div>
      </form>
      <label>
        <input style={styles.checkboxStyle} type='checkbox' value={showAll} checked={showAll} onChange={ (ev) => setShowAll(ev.target.checked)} />
        { showAll ? 'show completed' : 'show all' }
      </label>
      <ul>
        { todos.map(todo => (
            <li key={todo.id}>
                {todo.name} 
                <span style={styles.removeButton} onClick={handleRemove(todo.id)}>x</span>
                <input type='checkbox' style={styles.checkboxStyle} onChange={(ev) => toggleCompleted(todo.id, ev.target.checked)} />
            </li>
          )
        )}
      </ul>
    </>
  )
}

export default AddTodo;
