import React,  { Fragment } from 'react';
import _ from 'lodash'


const Number = () =>{
  const arrayOfNumbers = _.range(1, 10);

    return(
      <Fragment>
        <main className="card text-Center">
          <div>
              {arrayOfNumbers.map((number,i) => (
              <span key={i}>{number}</span>))}
          </div>
    </main>
  </Fragment>
)

}

export default Number
