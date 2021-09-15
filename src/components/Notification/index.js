import React from 'react';
import  { useSelector } from 'react-redux'

const Notification = () => {
  const { message, _status} = useSelector(state => state.notification.notification)
  
  const styles = {
    color: _status === 'error' ?  'red' : 'green',
    padding: '10px',
    border: '1px solid blue',
    marginBottom: '10px',
    borderShadow: '1px 2px 3px 4px',
  }
  console.log(message, _status);
  return (
    <>
      { message ? <div style={styles}>{ _status }: { message }</div> : null}
    </>
  )
}

export default Notification;
