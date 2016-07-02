Minimum

function min (num1, num2) {
  return Math.min(num1, num2)
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10



Recursion

function isEven (num) {
  if ((num * (-1)) % 2 !== 0)
      return false
    if ((num * (-1)) % 2 == 0)
      return true
    else if (num == 1)
      return false
    else if (num === 0)
      return true
    else
      return isEven(num - 2)
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-2));
// → ??



Bean Counting

// Your code here.

function countBs(str) {
  return countChar(str, "B")
}

function countChar(str, letter) {
  var count = 0
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) === letter) {
      count++
    }
  }
  return count
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "l"));
// → 4