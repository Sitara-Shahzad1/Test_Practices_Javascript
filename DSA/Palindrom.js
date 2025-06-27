const isPalindrom = (num)=>{
 let copyNum = num , reverseNumber = 0;
while (copyNum > 0){
  const lastdigit = copyNum %10;
   reverseNumber = reverseNumber *10 + lastdigit;
   copyNum = Math.floor(copyNum/10)
}
return num === reverseNumber;
}

 console.log(isPalindrom(121));
 