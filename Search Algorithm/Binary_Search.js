const binarySearch = (arr, target) =>{

  let start = 0; end = arr.length-1;
  console.log(end);
  
  while(start <= end){
    let mid = Math.floor((start + end )/2);

    if(arr[mid] === target){
      return mid;
    }

    else if (arr[mid] > target){
       end = mid -1;
    }

    else {
      start = mid +1;
    }
  }
  return -1;
}

console.log(binarySearch([1,2,3,4,5,6],6));



const binarySearchRec = (arr, target ) =>{

  return binarySearchRecUtil(arr, target , 0 , arr.length )
}

const binarySearchRecUtil = (arr, target, start , end) =>{

  let mid = Math.floor((start + end )/2);

    if(arr[mid] === target){
      return mid;
    }

    else if (arr[mid] > target){
     return   end = mid -1;
    }

    else {
      return start = mid +1;
    }

}