const convertEven = (num) => {
 let Even = [];
  let convert = num.toString().split("").map(Number);
  for (let i = 0; i < convert.length; i++) {
   if(convert[i] %2 ===0 ){
    Even.push(convert[i])
   }
    
  }
   let sum = Even.reduce((a,b) => a+b);
  console.log(Even);
  console.log(`Because ${Even} are divisible by 2` );
  console.log(`Total Even digits are ${Even.length}`);
  console.log(`SUm of Even Digits is ${sum}`);
  
  
  
}
convertEven(123456)