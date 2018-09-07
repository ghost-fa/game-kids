import React,  { Fragment } from 'react';
import _ from 'lodash'


const Number = () =>{


    return(
      <Fragment>
        <main className="card text-Center">
          <div>
              {numbersList.map((number,i) => (
              <span key={i}>{number}</span>))}
          </div>
    </main>
  </Fragment>
);

};
const numbersList = _.range(1, 10);

export default Number
