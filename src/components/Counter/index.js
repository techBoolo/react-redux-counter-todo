import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as counterActions from '../../redux/actions/counterActions';
const Counter = () => {

  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.count);
  const handleInc = () => {
    dispatch(counterActions.increment());
  }
  const handleDec = () => {
    dispatch(counterActions.decrement());
  }
  const handleReset = () => {
    dispatch(counterActions.reset());
  }

  return (
      <>
        <h4>Counter</h4> 
        <button style={{ fontSize: '40px' }} onClick={handleInc}>+</button>
        <span style={{ fontSize: '40px', padding: '10px', marginLeft: '10px', marginRight: '10px' }}>{ count }</span>
        <button style={{ fontSize: '40px' }} onClick={handleDec}>-</button>
        <div>
          <button style={{ fontSize: '40px' }} onClick={handleReset}>R</button>
        </div>
      </>
    )
}

export default Counter;
