import React, { Component, Fragment } from 'react';
import Stars from './Stars'
import Button from '../views/Button'
import Answer from '../views/Answer'

class Game extends Component{
  render(){
    return(
      <Fragment>
      <h1>Play Nine</h1>
    <Stars />
    <Button />
    <Answer />
  </Fragment>
)
  }
}

export default Game
