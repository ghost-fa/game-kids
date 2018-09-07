import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash'


const Stars = (props) =>{
  const numberOfStars = 1 + Math.floor( Math.random()*9);
  // let stars = [];
  // for (let i=0; i<numberOfStars; i++){
  //   stars.push(<FontAwesomeIcon key={i}   icon={faStar}/>)
  // }
  return  (
    <div className="col-5">

      {_.range(numberOfStars).map(i => <FontAwesomeIcon key={i}   icon={faStar}/>)}

    </div>
  )
}

export default Stars
