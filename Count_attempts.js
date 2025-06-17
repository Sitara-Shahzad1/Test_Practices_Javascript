// // // Count How Many Times Each Element Appears in an Array

// // const countAttempt = (arr) =>{

// // let result = [];
// // arr.forEach(word=> { 
// // if(word.length < 5){
// //  result.push(word);
// // }

// // });
// // console.log(result);
// // }

// // countAttempt(["cat", "dog", "cat", "cat", "dog", "fish"]);

// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// const count = fruits.reduce((acc, item) => {

//   acc[item] = (acc[item] || 0) + 1;
//   return acc;

// }, {});

// console.log(count);


// //=====================Using if else 
const fruit = [1, 2, 2, 3, 3, 3, 4];
let coun = {};

fruit.forEach(item => {
  if (coun[item]) {
    coun[item]++;

  } 
  else {
    coun[item] = 1;
  }
});

console.log(coun);

