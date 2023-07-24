// put blanks in the place of commented code

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  // 8. tell them this is a recursive function
  // and to calculate the execute the code for result
  // return n * factorial(n - 1);
}

let myNumber = 5;
// let factorialOfMyNumber = factorial(myNumber);
console.log(factorialOfMyNumber);

// ===================================

function findLargestNumber() {
  // here numbers array should be taken as parameter for this function
  let largestNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      // 9. ask them to write a line of code
      // for equating the largest number to iterated number
      ________________________________________;
      // largestNumber = numbers[i];
    }
  }
  // 10. and ask to return that number
  ________________________________________;
  // return largestNumber;
}

let myArray = [1, 4, 7, 3, 9, 2];
let largestNumber = findLargestNumber(myArray);
console.log(largestNumber);

// =====================================

function checkPalindrome(str) {
  // 11. ask them to take length of string and proceed
  // const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      // 12. ask them to console log the thing when condition is satisfied
      _______________________________________________;
      // console.log("NOT a palindrome");
    }
  }
  // 13. ask them to execute the block out of for loop
  __________________________________________________;
  // console.log("The string is a palindrome");
}
// 14. ask them to call the function
________________________________________
// checkPalindrome("racecar");

// ====================================

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  // 15. ask them for this "let i = 2; i <= Math.sqrt(n); i++" in for loop
  for (____________________________________) {
  if (n % i === 0) {
    return false;
  }
   }
  return true;
}

let myNumber = 7;
let isMyNumberPrime = isPrime(myNumber);
console.log(isMyNumberPrime);

// ===================================

function sortArray(numbers) {
  return numbers.sort(function (a, b) {
    // 16. ask them to execute what to return with a and b
    // return a - b;
  });
}

let myArray = [1, 4, 7, 3, 9, 2];
let sortedArray = sortArray(myArray);
console.log(sortedArray);

// ====================================
