import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';



const Stars = () =>{
  return  (
    <div className="col-5">
      <FontAwesomeIcon  icon={faStar}/>
      <FontAwesomeIcon  icon={faStar}/>
      <FontAwesomeIcon  icon={faStar}/>
      <FontAwesomeIcon  icon={faStar}/>
      <FontAwesomeIcon  icon={faStar}/>
    </div>
  )
}

export default Stars
