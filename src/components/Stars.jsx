import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';



const Stars = (props) =>{
  const numberOfStars = 1 + Math.floor( Math.rendom()*9);
  let stars = [];
  for (let i=0; i<numberOfStars; i++){
    stars.push(<FontAwesomeIcon key={i}   icon={faStar}/>)
  }
  return  (
    <div className="col-5">

      {stars}

    </div>
  )
}

export default Stars
