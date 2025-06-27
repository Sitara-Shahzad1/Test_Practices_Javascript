const longestCommonPrefix = (arr) => {
  if (arr.length === 0) return "";

  let prefix = arr[0]; // Start with the first word

  for (let i = 1; i < arr.length; i++) {
    while (arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1); // Shrink the prefix one char from end
      if (prefix === "") return "";
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "fly"])); // Output: "fl"
