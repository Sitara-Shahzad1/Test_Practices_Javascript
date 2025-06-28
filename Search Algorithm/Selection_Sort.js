const selectionSort = (arr) =>{
 for (let i = 0; i < arr.length -1; i++) {
  let minInd = i;
  for (let j = i+1; j < arr.length; j++) {
    if(arr[j] < arr[minInd]){

      minInd = j;
    }
    
  }
  if(minInd !== i) {

    [arr[minInd], arr[i]] = [arr[i] , arr[minInd]]
  }
 }
 return arr;
}

console.log(selectionSort([22,33,45,77,21,32,44]));
