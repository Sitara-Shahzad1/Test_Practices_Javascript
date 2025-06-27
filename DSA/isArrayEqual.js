const isArrayEqual = (arr1 , arr2)=>{
  // if(arr1.length !== arr2.length) {
  //   return false
  // }

  // for (let i=0; i<= arr1.length; i++){
  //   if(arr1[i] !== arr2[i]){
  //     return false
  //   }
  // }

  // return true;

  // we can do same with every 
  return arr1.length === arr2.length && arr1.every((ele, i)=> arr1[i] === arr2[i])
}

console.log(isArrayEqual([1,2,3,4], [1,2,3,4]));
