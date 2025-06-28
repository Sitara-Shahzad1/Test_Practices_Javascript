const intersection = (arr1, arr2) =>{

  let result =[];
  for(let i=0; i<=arr1.length; i++){
    for (let j = 0; j < arr2.length; j++) {
      if(arr1[i] === arr2[j] && !result.find((x) => x === arr1))
      result.push(arr1[i]);
    }
  }
  return result;
}

console.log(intersection([1,2,3], [1,5,4]));
