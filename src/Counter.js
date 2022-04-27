import React from 'react';
import './Counter.css';

function Counter(props) {

  return (
    <div className="counter">
      Counter:
      <span className="value">
        {props.initValue}
      </span>
    </div>
  )
}

export default Counter;