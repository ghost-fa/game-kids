import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck,faSyncAlt, faTimes} from '@fortawesome/free-solid-svg-icons';
const Button = (props) =>{
  let button;
  switch (props.answerIsCorrect) {
    case true:
    button =
    <button className='btn btn-success' onClick={props.acceptAnswer}>
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
    <div className="col-2 text-center">
        {button}

        <button className="btn btn-warning btn-sm mt-3" onClick={props.redraw}>
          <FontAwesomeIcon icon={faSyncAlt} />
          {props.redraws}
        </button>
  </div>
)
}

export default Button
