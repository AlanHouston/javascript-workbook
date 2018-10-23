'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//user1 enters r,p, or s
//user2 enters r,p, or s

//check if user1 enters rock, paper, or scissors
//check if user2 enters rock, paper, or scissors

//check to see if user1 = user2

//if user1 is rock- if user2 chooses paper, user2 wins! paper covers rock! if user2 chooses scissors, user1 wins! rock breaks scissors
//if user1 is paper- if user2 chooses rock, user1 wins! paper covers rock! if user2 chooses scissors, user2 wins! scissors cuts paper
//if user1 is scissors- if user2 chooses rock, user2 wins! rock breaks scissors! if user2 chooses paper, user1 wins! scissors cuts paper




function rockPaperScissors(hand1, hand2) {
  const p1 = 'Player One wins!';
  const p2 = 'Player Two wins!';
  const rock = ' Rock breaks scissors!';
  const paper = ' Paper covers rock!';
  const scissors = ' Scissors cut paper!';
  const p1bad = hand1 != 'rock' && hand1 != 'paper' && hand1 != 'scissors';
  const p2bad = hand2 != 'rock' && hand2 != 'paper' && hand2 != 'scissors';
  if(p1bad && p2bad){
    return "Do either of you want to play or not?"
  }else if(p1bad){
    return 'Player 1, please enter rock, paper, or scissors.'
  }else if(p2bad){
    return 'Player 2, please enter rock, paper, or scissors.'
  }else if (hand1 === hand2){
    return 'Tie!';
  }else if (hand1==='rock'){
    if(hand2==='paper'){
      return p2 + paper;
    }else return p1 + rock;
  }else if(hand1==='paper'){
    if(hand2==='scissors'){
      return p2 + scissors;
    }else return p1 + paper;
  }else if(hand1==='scissors'){
    if (hand2==='rock'){
      return p2 + rock;
    }else return p1 + scissors;
  } 

}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
