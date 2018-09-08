import React, { Component, Fragment } from 'react';
import Stars from './Stars'
import Button from '../views/Button'
import Answer from '../views/Answer'
import Number from './Number'


class Game extends Component{

    state={
      selectedNumbers:[],
      randomNumberOfStars : 1 + Math.floor( Math.random()*9),
      usedNumbers: [],
      answerIsCorrect: null,

    }

    selectNumber = (clickedNumber) =>{
      if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {return;}
      this.setState(prevState => ({
        answerIsCorrect: null,
        selectedNumbers:prevState.selectedNumbers.concat(clickedNumber)
      }));
    };

unselectNumber = (clickedNumber) => {
  this.setState(prevState => ({
      answerIsCorrect: null,
    selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
  }));
};


checkAnswer = () =>{
  this.setState(prevState => ({
    answerIsCorrect:prevState.randomNumberOfStars === prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
  }))
}

acceptAnswer = () =>{

}

  render(){
    const {
      selectedNumbers,
     randomNumberOfStars,
      answerIsCorrect,
      usedNumbers
    } = this.state
    return(
      <Fragment>
        <main className="container">
      <h1>Play Nine</h1>
      <hr />
      <div className="row">
    <Stars numberOfStars={randomNumberOfStars}/>
    <Button
      selectedNumbers={selectedNumbers}
      checkAnswer={this.checkAnswer}
      answerIsCorrect={answerIsCorrect}/>
    <Answer
      selectedNumbers={selectedNumbers}
      unselectNumber={this.unselectNumber}/>

    </div>
    <br />

    <Number
      selectedNumbers={selectedNumbers}
    selectNumber={this.selectNumber}
    usedNumbers={usedNumbers}/>
    </main>
  </Fragment>
)
  }
}

export default Game
