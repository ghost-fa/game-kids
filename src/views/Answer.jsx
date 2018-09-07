import React from 'react';


const Answer = (props) =>{
  return (<div className="col-5">
  {props.selectedNumber.map((number, i) =>
  <span key={i}>{number}</span>)}
  </div>)
}

export default Answer
