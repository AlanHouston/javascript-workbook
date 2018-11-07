'use strict';

// Use a for loop to console.log each item in the array carsInReverse.
const carsInReverse = [ 'Honda',
'Tesla',
'Nissan',
'Chevy',
'Kia',
'BMW',
'Toyota',
'Ford' ]

for(let x=0;x<carsInReverse.length;x++){
    console.log(carsInReverse[x]);
}

// for...in loop
// Create an object (an array with keys and values) called persons with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
// Use a for...in loop to console.log each key.

const persons = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}

for (const key in persons){
    console.log(key);
}

// Then use a for...in loop and if state to console.log the value associated with the key birthDate.
for (const key1 in persons){
   if(key1 == 'birthDate'){
    console.log(persons['birthDate'])
   }
}

// while loop
// Use a for loop to console.log the numbers 1 to 1000.

let number = 1;
while (number <1001){
    console.log(number);
    number++;
}

for(let numb=1;numb<1001;numb++){
    console.log(numb)
}

// do...while loop
// Use a do...while loop to console.log the numbers from 1 to 1000.

let num = 1;
do{
    console.log(num);
    num++;
}
while(num < 1001);

// When is a for loop better than a while loop?
// When you want to iterate over something to evaluate a boolean condition within the loop, rather than have a continual loop until the condition is not met

// How is the readability of the code affected?
// while loops seem more readable to me!

// What is the difference between a for loop and a for...in loop?
// for loop should be used for array, for in used for object

// What is the difference between a while loop and a do...while loop?
// in a while loop, the condition is checked before each iteration. in a do while, condition is checked after each iteration




