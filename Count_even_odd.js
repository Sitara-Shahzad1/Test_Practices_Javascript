const Counter =(nums) =>{

  let even = [];
  let odd =[]
  // nums.forEach(element => element %2 ===0 ? even.push(element) : []  );
  nums.forEach( num => {
    if(num %2 === 0){
      even.push(num)
    } else{
      odd.push(num)
    }
  }
);
console.log(even);
console.log(`There are ${even.length} even number in [${nums}]`);

console.log(odd);
console.log(`There are ${odd.length} even number in [${nums}]`);

console.log(`Total Numbers of Array are ${nums.length}`);

}
Counter([1,2,3,34,4,5,6,7,8])

