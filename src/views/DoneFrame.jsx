import React from 'react';


const DoneFrame = (props) =>{
  return (
    <div className="text-center">
      <h2>{props.doneStatus}</h2>
      <span className="btn btn-secondray" onClick={props.resetGame}>Play Again</span>
    </div>
  )
}



export default DoneFrame
