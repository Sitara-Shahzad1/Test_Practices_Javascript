const isAnagram = (str1, str2)=>{
  let r = str1.toLowerCase().split('').reverse().sort().join('');
  let s = str2.toLowerCase().split('').reverse().sort().join('');

 return r == s;
  
}

console.log(isAnagram("silent", "listen"));
