 /* 
 Option 2: New Logic Challenge – "Armstrong Numbers"
💥 Armstrong number: A number where the sum of each digit raised to the power of total digits equals the number itself
👉 e.g., 153
1³ + 5³ + 3³ = 153 ✅
Find all Armstrong numbers between 1 and 1000.
*/
function findArmstrongNumbers(limit) {
  let armstrongNumbers = [];

  for (let i = 1; i <= limit; i++) {
    let numStr = i.toString();
    let power = numStr.length;
    let sum = 0;

    for (let digit of numStr) {
      sum += Math.pow(Number(digit), power);
    }

    if (sum === i) {
      armstrongNumbers.push(i);
    }
  }

  console.log("Armstrong numbers between 1 and " + limit + " are:");
  console.log(armstrongNumbers);
}

findArmstrongNumbers(1000);
