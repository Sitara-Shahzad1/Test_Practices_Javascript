// Option 1: Find All Prime Numbers (you've already done this — but here's a challenge)
// ✅ Enhance your prime finder to also count how many primes are there and print:


const findPrime = (a,b) =>{

  let arr = []
  for(let i=a; i <=b; i++){
    arr.push(i);
  }

  const isPrime = arr.filter(num => {
    if(num < 2 ) return false ;
    for(let i =2; i<= Math.sqrt(num); i++){
      if(num %i ===0 ) return false ; 
    }
    return true;
  })

  console.log(isPrime);
  console.log(`There are ${isPrime.length} prime numbers between ${a} and ${b}`);
  
}

findPrime(1,100)