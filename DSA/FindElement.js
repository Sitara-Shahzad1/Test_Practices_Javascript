let arr = [1,2,3,4,5,6,6]

const findEl = (arr, target) =>{
 for (const x of arr) {
   if(x === target){
    return true;
   }
 }
 return false;
}

console.log(findEl(arr , 4));
