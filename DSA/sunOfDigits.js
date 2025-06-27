const sumOfDigit =(nums ) =>{

  let sum = 0;
  while(nums>0){

    sum += nums %10;
    nums = Math.floor(nums/10) ;
  }
  return sum;
}
// console.log(sumOfDigit(1287));


const lengthOfDigit =(num) =>{

 num = Math.abs(num)
  let count =0;
  do{
    count++;
    num = Math.floor(num /10);
  } while(num > 0);
  return count ;
}

console.log(lengthOfDigit(-12345));

