const countVowel = (str) =>{
  let obj = {}
  let result = []
  let vowel = ["a","e","i","o","u"];

  let string = str.toLowerCase().split('')
  // console.log(string);

 string.filter(word=> {
    if (vowel.includes(word)){
      result.push(word);
    }
  }
)
console.log(result);
  console.log(`There are ${result.length} vowels in: "${str}"`);
  //to check how many times vowel word appears in str
 result.forEach(word => {
  if(obj[word]){
    obj[word]++
  }
  else{
    obj[word] = 1
  }
 })
 //this will be used to count all vowel words 
vowel.forEach(v => {
  if (!obj[v]) {
    obj[v] = 0;
  }
});
console.log(obj);

}
countVowel("I am learning JavaScript")
