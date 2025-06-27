const indexOfOcc = (mainstring, substring) => { 

  
// return mainstring.indexOf(substring);  // it is simplest way 


// but we have to do it with loops 

  let m = mainstring.length;
  let n = substring.length; 

  for (let i = 0; i <= m-n; i++) {
    let found = true;

    for(let j=0; j< n; j++){
      if(mainstring[i+j] !== substring[j]){
        found = false;
        break;
      }
    }
    if(found) return i;
    
  }
  return -1;
}

console.log(indexOfOcc("Leetcode" , "code"));
