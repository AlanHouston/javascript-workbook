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
const isString = (word) => {
  return typeof(word)=='string';
}

const hasOnlyLetters=(word)=>{
  const letter = ' abcdefghijklmnopqrstuvwxyz';
  for(let n=0;n<word.length;n++){
    let isLetter = false;
    for(let m=0;m<letter.length;m++){
      if(word[n]==letter[m]){
      isLetter=1;
      }
    }
      if(isLetter==false){
        return false;
      }
  }
  return true;
}

const findFirstVowel=(word)=>{
  for(let y=1;y<word.length;y++){
    for(let x=0;x<vowel.length;x++){
      if(word[y] == vowel[x]){
        return y
      }
    }
  }
}

const firstLetterVowel = (word) => {
  for(let x=0;x<vowel.length;x++){
    if(word[0] == vowel[x]){
      return true
    }
  }
}

const pigLatin = (word)=> {
  word = word.trim().toLowerCase();
  const theFirstVowel = findFirstVowel(word);
  if(isString(word) && hasOnlyLetters(word)){
    word = word.split('');
    if(firstLetterVowel(word)){
      return word.join('')+ 'yay'
    }else if (theFirstVowel){
      const middle = word.slice(0,theFirstVowel).join('');
      const beginning = word.slice(theFirstVowel).join('');
      return beginning + middle + 'ay'
    }
  }else return 'Please enter words with letters!'
}

pigLatin('hello')


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
