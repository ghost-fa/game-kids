import React,  { Fragment } from 'react';
import _ from 'lodash'


const Number = (props) =>{

const numberClassName = (number) =>{
  if(props.selectedNumber.indexOf(number) >= 0){
    return 'selected';
  }
}
    return(
      <Fragment>
        <main className="card text-Center">
          <div>
              {numbersList.map((number,i) => (
              <span key={i}
                className={numberClassName(number)}
                onClick={ () => props.selectNumber(number)} >{number}</span>))}
          </div>
    </main>
  </Fragment>
);

};
const numbersList = _.range(1, 10);

export default Number