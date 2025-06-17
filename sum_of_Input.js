const sumOfNum = (num) => {

  let convert = num.toString().split("").map(Number);
  let number = num.toString().split("").map(Number).join(" + ");
  let sum = convert.reduce((a,b) => a+b)
 
  if(sum % 3 === 0) {
 console.log(`The sum of ${number} is  ${sum} -  divisible by 3`);
  }  else{
    console.log(`The sum of ${number} is  ${sum} -  not divisible by 3`);
  }
}
sumOfNum(82394)






//=========================================product 
// const productOfNum = (num) => {

//   let Even = [];
//   let Odd = [];
//   let convert = num.toString().split("").map(Number);
//   let number = num.toString().split("").map(Number).join(" × ");
//   let product = convert.reduce((a,b) => a*b)
//   console.log(`The product of ${number} is  ${product}`);

//   convert.forEach(number => {
//      if(number % 2 === 0 ){
//     Even.push(number)
//   }
//   else if( number % 2 !== 0) {
//  Odd.push(number)
//   }
//   });
//   console.log(`There are ${Even.length} Even numbers in ${num} which is [${Even}]` );
//   console.log(`There are ${Odd.length} Odd numbers in ${num} which is [${Odd}]` );
 
// }
// productOfNum(82394)