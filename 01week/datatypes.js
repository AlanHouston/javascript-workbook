// //Write a JavaScript program to display the current day and time.

const showDate = ()=>{
  const date = new Date();
  const d = date.getDay();
  let weekDay;
  if (d == 0){
    weekDay = 'Sunday';
  }else if (d == 1){
    weekDay = 'Monday';
  }else if (d == 2){
    weekDay = 'Tuesday';
  }else if (d == 3){
    weekDay = 'Wednesday';
  }else if (d == 4){
    weekDay = 'Thursday';
  }else if (d == 5){
    weekDay = 'Friday';
  }else if (d == 6){
    weekDay = 'Saturday';
  }//end of if-else if
  const addZero=(x)=>{
    if (x < 10) {
    x = "0" + x;
  }
  return x;
  }//end of addZero
  const hour = date.getHours();
  let min = date.getMinutes();
  min = addZero(min);
  return weekDay + ', ' + hour + ':' + min
  // return 'Today is '+ weekDay + '. At the tone, the time will be ' + hour + ':' + min + '. Beep. Have a nice day.'
 }
 showDate();

 //after I wrote that, I found these methods...

 const showTheDate=()=>{
  const date = new Date();
  const n = date.toDateString();
  const time = date.toLocaleTimeString();
  return n + ', ' + time
}
showTheDate();

//Write a JavaScript program to convert a number to a string.

const numToString=(x)=>{
  const str = x.toString();
  return str;
}
numToString(39);

//OR

const numToString=(x)=>{
  const str = String(x);
  return str;
}
numToString(8675309);

//OR

const numToString=(x)=>{
  const y = x + '';
  return y;
}
numToString(543);

//Write a JavaScript program to convert a string to the number.

const strToNum=(num1)=>{
  const x = Number(num1);
  return x;
}
strToNum('23451');

//OR

const strToNum=(num1)=>{
  const x = parseFloat(num1);
  return x;
}
strToNum('333333');

//OR

const strToNum=(num1)=>{
  const x = parseInt(num1);
  return x;
}
strToNum('00100000');

//Write a JavaScript program that takes in different datatypes and prints out whether they are a:
//Boolean
//Null
//Undefined
//Number
//NaN
//String

const whatKind=(diffType)=>{
  const x = typeof(diffType);
  return x;
}
whatKind(false);

// Write a JavaScript program that adds 2 numbers together.

const sumOfTwoNumbers = (num1, num2) => {
  if (isNaN(num1) || isNaN(num2)){
    return 'This is not a joke. Enter a number.'
  }else return num1+num2;
}   
sumOfTwoNumbers(123,456);

//Write a JavaScript program that runs only when 2 things are true.

const bothTrue = (arg1,arg2)=>{
  if (arg1 && arg2){
    return 'Both are true!'
  }else return 'You need to take this more serious, cool guy'
}
bothTrue('oh hey',1);

// Write a JavaScript program that runs when 1 of 2 things are true.

const oneTrue = (one,two)=>{
  if (one || two){
    return 'At least one of these is true!'
  }else return 'Neither are true.'
}
oneTrue(1,1);

//OR if you meant ONLY when 1 of 2 are true

const oneTrue = (one,two)=>{
  if ((one || two) && !(one && two)){
    return 'Only one of these is true!'
  }else return 'Neither or both are true!?'
}
oneTrue(1,0);

//Write a JavaScript program that runs when both things are not true.

const notTrue = (lel,lol)=>{
  if (!lel && !lol){
    return 'Nothing is real.'
  }else return 'Something is real!'
}

notTrue(false,0)