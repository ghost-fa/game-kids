import React, { Component, Fragment } from 'react';
import Stars from './Stars'
import Button from '../views/Button'
import Answer from '../views/Answer'
import Number from './Number'
import DoneFrame from '../views/DoneFrame'

class Game extends Component{
    static randomNumber = () => 1 + Math.floor( Math.random()*9);

    state={
      selectedNumbers:[],
      randomNumberOfStars : Game.randomNumber(),
      usedNumbers: [],
      answerIsCorrect: null,
      redraws:5,
      doneStatus : 'Game over!',
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
 this.setState(prevState => ({
   usedNumbers:prevState.usedNumbers.concat(prevState.selectedNumbers),
   selectedNumbers:[],
   answerIsCorrect:null,
   randomNumberOfStars:Game.randomNumber(),
 }))
}

redraw = () => {
  if(this.state.redraws === 0 )return;
  this.setState(prevState =>({
    randomNumberOfStars : Game.randomNumber(),
    answerIsCorrect : null,
    selectedNumbers:[],
    redraws: prevState.redraws - 1 ,
  }))
}

  render(){
    const {
      selectedNumbers,
     randomNumberOfStars,
      answerIsCorrect,
      usedNumbers,
      redraws,
      doneStatus,
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
      redraws={redraws}
      acceptAnswer={this.acceptAnswer}
      checkAnswer={this.checkAnswer}
      redraw={this.redraw}
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

    <DoneFrame doneStatus={doneStatus}/>
    </main>
  </Fragment>
)
  }
}

export default Game
