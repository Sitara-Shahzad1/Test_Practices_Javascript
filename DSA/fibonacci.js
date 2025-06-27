const fibonaci = (n) =>{

if (n < 2 ){
  return n; 
}

let prev =0 , current = 1, next;
 for (let i =2; i<=n; i++){
  next = prev +current;
  prev = current;
  current = next;
 }

 return next;

}

console.log(fibonaci(10));



// recursion 
const fibo =(n)=>{
  if(n<2){
    return n;
  }
 return  fibo (n-1) + fibo(n-2)

}

console.log(fibo(10));

