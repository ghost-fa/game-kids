import React, { Component, Fragment } from 'react';
import Stars from './Stars'
import Button from '../views/Button'
import Answer from '../views/Answer'
import Number from './Number'


class Game extends Component{

    state={
      selectedNumbers:[],
      rendomNumberOfStars : 1 + Math.floor( Math.random()*9),
    }

    selectNumber = (clickedNumber) =>{
      if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {return;}
      this.setState(prevState => ({
        selectedNumbers:prevState.selectedNumbers.concat(clickedNumber)
      }));
    };

unselectNumber = (clickedNumber) => {
  this.setState(prevState => ({
    selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
  }));
};
  render(){
    const { selectedNumbers, randomNumberOfStars} = this.state
    return(
      <Fragment>
        <main className="container">
      <h1>Play Nine</h1>
      <hr />
      <div className="row">
    <Stars numberOfStars={randomNumberOfStars}/>
    <Button />
    <Answer
      selectedNumbers={selectedNumbers}
      unselectNumber={this.unselectNumber}/>

    </div>
    <br />

    <Number
      selectedNumbers={selectedNumbers}
    selectNumber={this.selectNumber}/>
    </main>
  </Fragment>
)
  }
}

export default Game
