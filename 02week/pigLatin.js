'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//check if it's a string of letters, function isString(), function hasOnlyLetters() - if so, turn string into array, .split()
//if first letter is vowel, return word + 'yay', function findFirstVowel()
//other wise, find the first vowel, function firstLetterVowel(), return the index of the vowel, letters before vowel become new (var) middle, vowel and everything following become new (var) beginning, slap an 'ay' after those bad boys
//.join() to bring back to string

const vowel = ['a','e','i','o','u'];
const isString = (formattedWord) => {
  return typeof(formattedWord)=='string';
}

const hasOnlyLetters=(formattedWord)=>{
  const letter = ' abcdefghijklmnopqrstuvwxyz';
  for(let n=0;n<formattedWord.length;n++){
    let isLetter = false;
    for(let m=0;m<letter.length;m++){
      if(formattedWord[n]==letter[m]){
      isLetter=1;
      }
    }
      if(isLetter==false){
        return false;
      }
  }
  return true;
}

const findFirstVowel=(splitWord)=>{
  for(let y=1;y<splitWord.length;y++){
    for(let x=0;x<vowel.length;x++){
      if(splitWord[y] == vowel[x]){
        return y
      }
    }
  }
}

const firstLetterVowel = (splitWord) => {
  for(let x=0;x<vowel.length;x++){
    if(splitWord[0] == vowel[x]){
      return true
    }
  }
}

const pigLatin = (word)=> {
  const formattedWord = word.trim().toLowerCase();
  const theFirstVowel = findFirstVowel(formattedWord);
  if(isString(formattedWord) && hasOnlyLetters(formattedWord)){
    const splitWord = formattedWord.split('');
    if(firstLetterVowel(splitWord)){
      return splitWord.join('')+ 'yay'
    }else if (theFirstVowel){
      const middle = splitWord.slice(0,theFirstVowel).join('');
      const beginning = splitWord.slice(theFirstVowel).join('');
      return beginning + middle + 'ay'
    }
  }else return 'Please enter words with letters!'
}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
