import React, { Component, Fragment } from 'react';
import Stars from './Stars'
import Button from '../views/Button'
import Answer from '../views/Answer'
import Number from './Number'
import DoneFrame from '../views/DoneFrame'
import _ from 'lodash'
import possibleCombinationSum from '../modules/possibleCombinationSum'

class Game extends Component{
  static randomNumber = () => 1 + Math.floor( Math.random()*9);
  static initialState = () => ({
        selectedNumbers:[],
        randomNumberOfStars : Game.randomNumber(),
        usedNumbers: [],
        answerIsCorrect: null,
        redraws:5,
        doneStatus : null,
      });

  state = Game.initialState();

   resetGame = () => this.setState(Game.initialState());


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
    }));
  }

  acceptAnswer = () =>{
    this.setState(prevState => ({
      usedNumbers:prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers:[],
      answerIsCorrect:null,
      randomNumberOfStars:Game.randomNumber(),
    }), this.updateDoneStatus);
  }

  redraw = () => {
    if(this.state.redraws === 0 )return;
     this.setState(prevState =>({
        randomNumberOfStars : Game.randomNumber(),
        answerIsCorrect : null,
        selectedNumbers:[],
        redraws: prevState.redraws - 1 ,
      }),this.updateDoneStatus);
  }

  possiblesSolutions = ({randomNumberOfStars, usedNumbers})=>{
     const possibleNumbers = _.range(1, 10).filter(number => usedNumbers.indexOf(number) === - 1);
     return possibleCombinationSum(possibleNumbers, randomNumberOfStars);
  };

  updateDoneStatus = () => {
     this.setState(prevState => {
       if(prevState.usedNumbers.length === 9){
        return{doneStatus:'Done. Nice!'};
     }
      if(prevState.redraws === 0 && !this.possiblesSolutions(prevState)){
       return {doneStatus: 'Game Over!'};
      }
    })
  }
  render(){
     const {
        selectedNumbers,
       randomNumberOfStars,
        answerIsCorrect,
        usedNumbers,
        redraws,
        doneStatus,
      } = this.state;

  return(
       <Fragment>
             <main className="container mt-5">
                   <h1>Play Nine</h1>
              <hr />
             <div className="row m-auto">
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
           {doneStatus ?  <DoneFrame resetGame={this.resetGame} doneStatus={doneStatus}/> :
        <Number
            selectedNumbers={selectedNumbers}
            selectNumber={this.selectNumber}
            usedNumbers={usedNumbers}/>

          }



                </main>
     </Fragment>
    )
  }
}

export default Game
