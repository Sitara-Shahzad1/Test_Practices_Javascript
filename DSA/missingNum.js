const missingNum = (num ) =>{

  // let sum = 0;
  // for (let i = 0; i < num.length; i++) {
  //  sum += num[i];
  // }
  // // return n*(n+1)/2-sum;
  return num.length*(num.length+1)/2-num.reduce((a,b)=> a+b);
}

console.log(missingNum([1,3]));
