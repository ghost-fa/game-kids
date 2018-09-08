import React,  { Fragment } from 'react';
import _ from 'lodash'


const Number = (props) =>{
  const NumbersList = _.range(1, 10);
  const numberClassName = (number) =>{

     if(props.usedNumbers.indexOf(number) >= 0){
       return 'used';
   }
     if(props.selectedNumbers.indexOf(number) >= 0){
       return 'selected';
   }
  };
    return(
      <Fragment>
        <main className="card text-Center">
          <div>
              {NumbersList.map((number,i) => (
              <span key={i}
                 className={numberClassName(number)}
                 onClick={ () => props.selectNumber(number)} >{number}</span>))}
          </div>
       </main>
     </Fragment>
   );

};


export default Number
