import React, { Component, Fragment } from 'react';
import Stars from './Stars'
import Button from '../views/Button'
import Answer from '../views/Answer'
import Number from './Number'


class Game extends Component{

    state={
      selectedNumber:[],
      rendomNumberOfStars : 1 + Math.floor( Math.random()*9),
    }

    selectNumber = (clickedNumber) =>{
      if(this.state.selectedNumber.indexOf(clickedNumber) >= 0) return;
      this.setState(prevState => ({
        selectedNumber:prevState.selectedNumber.concat(clickedNumber)
      }));
    }

  render(){
    return(
      <Fragment>
        <main className="container">
      <h1>Play Nine</h1>
      <hr />
      <div className="row">
    <Stars numberOfStars={this.state.randomNumberOfStars}/>
    <Button />
    <Answer selectedNumber={this.state.selectedNumber}/>

    </div>
    <br />

    <Number
      selectedNumber={this.state.selectedNumber}
    selectNumber={this.selectNumber}/>
    </main>
  </Fragment>
)
  }
}

export default Game
