const countVowel = (str) =>{

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

}
countVowel("I am learning JavaScript")