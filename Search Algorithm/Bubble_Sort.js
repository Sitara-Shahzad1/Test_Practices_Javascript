const bubbleSort =(arr) =>{

  let swapped ; 
  do {
    swapped =false;
    
    for (let i = 0; i < arr.length-1; i++) {
     if(arr[i] > arr[i+1]){


      //======using assignment operator 
      // let temp = arr[i];
      // arr[i] = arr[i+1];
      // arr[i+1] = temp;

// Array destructuring 
      [arr[i],arr[i+1]] = [arr[i+1], arr[i]]
      swapped = true;
     }
    }
  } while (swapped);
  return arr;
}
console.log(bubbleSort([33,44,22,11,66,77]));
