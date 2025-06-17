const removeDuplicates = (str) =>{

 let lowerStr=  str.toLowerCase().replace(/\s/g, "");
  let result = [...new Set(lowerStr)].join("");
  
  console.log(result)
}

removeDuplicates("I am learning JavaScript")