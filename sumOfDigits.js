const sumOfDigits = (num) => {

let convert = num.toString()
let digit = convert.split("").map(Number).reduce((a,b)=> a+b);
console.log(digit);
  
}

sumOfDigits(1234)