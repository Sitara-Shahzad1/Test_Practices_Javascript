const sumOfNum =(num) =>{
  let sum = 0;
  for (let i = 1; i <= num; i++) {
     sum += i ;
  }
  return sum;

  // samw can be done with 
        // return num*(num+1)/2;
}


console.log(sumOfNum(9));
