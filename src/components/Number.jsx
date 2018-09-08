import React,  { Fragment } from 'react';
import _ from 'lodash'


const Number = (props) =>{

const numberClassName = (number) =>{
  if(props.selectedNumbers.indexOf(number) >= 0){
    return 'selected';
  }
}
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
let NumbersList = _.range(1, 10);

export default Number
