'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//grab one piece from the end each time - movePiece(), use pop()
//check if move is legal, ie empty stack or last piece is bigger - isLegal()
//if isLegal, push()
//checkforwin() - when stacks.c = [4,3,2,1] - you win a cookie!
//resetStack() - stacks.a = [4,3,2,1]

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

console.log(stacks.c)

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const movePiece = (startStack,endStack)=> {
  let piece = stacks.startStack.pop();
  stacks.endStack.push(piece);
}

const isLegal = (piece)=> {
  let lastPiece = stacks.endStack.length-1;
  if(stacks.endStack == [] || stacks.endStack.lastPiece<piece) {
    stacks.endStack.push(piece);
  }
}

const checkForWin = ()=> {
  return stacks.c = [4,3,2,1];

}

const resetStack = ()=> {
  stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
  };
}

function towersOfHanoi(startStack, endStack) {
  

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}

