import React from 'react';
import './Display.css';

function Display(props) {
  return (
    <div>
      <span className={`value ${(props.displayValue <= 5 ? 'blue' : 'red')}`} >
        {props.displayValue}
      </span>
    </div>
  )
}

export default Display;