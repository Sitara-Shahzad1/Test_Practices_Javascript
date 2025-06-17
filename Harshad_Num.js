// A number is called a Harshad number if it is divisible by the sum of its digits.
// 18 → 1 + 8 = 9 → 18 % 9 === 0 ✅ → Harshad

const harshadNum = (num) => {
 let convert = num.toString().split("").map(Number);
 let number = convert.reduce((a,b) => a+b) ;
 console.log(number);
 console.log(`${num} is ${num % number === 0 ? '' : ' not'} a Harshad number because ${num} % ${number} = ${num % number}`);


}

harshadNum(19)