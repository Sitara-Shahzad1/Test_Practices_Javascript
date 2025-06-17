const Greater =(num , limit ) =>{
      let Even = [];
      let Odd = [];
      let Prime = [];


    console.log(`${num} is ${num > limit ? 'Greater' : 'Not Greater'} than ${limit}`);

    let convert = num.toString().split("").map(Number);
    convert.forEach(digit => {
      if(digit %2 === 0) {
        Even.push(digit)
      } else if(digit %2 !== 0){
          Odd.push(digit)
      } 

     if(isPrime(digit)){
      Prime.push(digit);
     }
    });
    console.log(`There are ${Even.length} EVEN number in ${num} : ${Even}`);
    console.log(`There are ${Odd.length} Odd number in ${num} : ${Odd}`);
    console.log(`There are ${Prime.length} Prime number in ${num} ${Prime.length > 0 ? ':' : ''} ${Prime}`);
    
    
  }
const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

Greater(827394,5)