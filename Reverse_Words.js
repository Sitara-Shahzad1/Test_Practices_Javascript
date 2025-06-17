const reverseWords = (str) => {
  let Reversed = str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
  console.log(Reversed);
}

reverseWords("I am learning JavaScript");