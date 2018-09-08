import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

const Button = (props) =>{
  let button;
  switch (props.answerIsCorrect) {
    case true:
    button =
    <button className='btn btn-success'>
      <FontAwesomeIcon icon={faCheck}/>
    </button>
    break;
    case false:
    button =
    <button className='btn btn-danger'>
      <FontAwesomeIcon icon={faTimes}/>
    </button>
      break;
    default:
    button =
      <button className='btn'
              onClick={props.checkAnswer}
              disabled={props.selectedNumbers.length === 0 }>=</button>;
      break;
  }
  return (
    <div className="col-2">
        {button}
  </div>
)
}

export default Button
