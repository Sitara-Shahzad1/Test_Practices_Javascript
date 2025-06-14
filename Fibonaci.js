const fibonaci = (n) =>{

  let result = [3,4]
  for(let i =2 ;  i<=n ; i++) {
    result.push(result[i-1]+result[i-2])

  }
  console.log(result);
  
}

fibonaci(10)