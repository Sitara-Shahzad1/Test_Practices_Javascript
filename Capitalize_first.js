const capitalizeFirst = (str) => {
  let string = str.split(' ').map(word =>{
    return word.charAt(0).toUpperCase() + word.slice(1) 
  }).join(' ')
 console.log(string);
 
}
    capitalizeFirst("I am learning JavaScript");