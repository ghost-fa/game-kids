import React, { Component, Fragment } from 'react';
import Stars from './Stars'
import Button from '../views/Button'
import Answer from '../views/Answer'
import Number from './Number'

class Game extends Component{
  render(){
    return(
      <Fragment>
        <main className="container">
      <h1>Play Nine</h1>
      <hr />
      <div className="row">
    <Stars />
    <Button />
    <Answer />
    <Number />
    </div>
    </main>
  </Fragment>
)
  }
}

export default Game
