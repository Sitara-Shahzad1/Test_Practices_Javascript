const isPalindrom = (limit) =>{

  let result = [];

  for (let i = 1; i <= limit; i++) {
    let str = i.toString()
    let convert = str.split('').reverse().join('');
    if(str === convert){
      result.push(i);
    }
    
  }
  console.log(`The number of palindroms between 1 and ${limit} is ${result.length}`);
  
  console.log(result);
  
}

isPalindrom(100)