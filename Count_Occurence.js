const CountOccur = (str) =>{

  let count = {}
  let occur = str.toLowerCase().replace(/\s/g, '').split("").forEach(word => {
    if(count[word]){
      count[word]++
    }else {
      count[word] = 1
    }
    
  });
  console.log(count);
 
  const max = Math.max(...Object.values(count));
  const mostFrequent = Object.keys(count).filter(key => count[key] === max);
console.log(`Most frequent character(s): ${mostFrequent.join(", ")}`);
  console.log(`They appeared ${max} times in "${str}"`);
  
}

CountOccur("JavaScript Rocks")