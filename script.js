"use strict";

// I am a huge sports fan and I often want to know the percentages of a particular statistic.

// ---> Calculating Percentages

const calcPercentage = function (make, attempt) {
  const percentage = (make / attempt) * 100; // divide the makes by the total number of attempts and multiply it by 100. Then save that as the percentage.

  console.log(`percentage: ${percentage}`); // log the percentage to the console.
};

calcPercentage(6, 10);

// -----------------------------------------------------------------------

// ---> Find the LOWEST nad HIGHEST values of an array.

const minMax = function (arr) {
  let min = arr[0]; // save the first index value in an array as min.
  let max = arr[0]; // save the first index value in an array as max.

  // loop over the length of any array.
  for (let i = 0; i < arr.length; i++) {
    const curValue = arr[i]; // save current array index value in a variable
    if (curValue < min) min = curValue; // if the current value is less than min, save that value as the min.

    if (curValue > max) max = curValue; // if the current value is greater than max, save that value as the max.
  }
  console.log(`min: ${min} max: ${max}`); // log the min and the max to the console.
};

minMax([19, 8, 33, 4, 261]);

const highScores = [
  35, 44, 46, 48, 32, 42, 33, 47, 40, 43, 49, 41, 39, 51, 50, 50, 50, 41, 44,
  56, 49,
];

minMax(highScores);

// -----------------------------------------------------------------------

// ---> Return third letter of string

const returnedString = function (string) {
  console.log(string);

  let arr = string.split("").filter((letter, index) => (index + 1) % 3 === 0);
  console.log(arr.join(""));
  return arr;
};

returnedString("iamyourlyftdriver");

// -----------------------------------------------------------------------

// ---> compare two arrays

const playerSelections = [142, 39, 7, 113];
const winningNumbers = [16, 12, 91, 52];
let result = "";

const checkIfWinner = function (arr1, arr2) {
  arr1.sort();
  arr2.sort();

  let str1 = arr1.join("");
  let str2 = arr2.join("");
  console.log(str1);
  console.log(str2);

  result =
    str1 == str2
      ? "You are a winner Today"
      : "Your selections do not match today. Try again Tomorrow.";

  console.log(result);
  return result;
};

console.log(checkIfWinner(playerSelections, winningNumbers));

// -----------------------------------------------------------------------

// ---> reverse a number

let str;
const reverseNumber = function (number) {
  str = number.toString().split("").reverse().join("");
};

reverseNumber(123456789);
console.log(str);

const reverseNumber2 = function (number) {
  number = number.toString().split("").reverse().join("");
  return number;
};

console.log(reverseNumber2(123456789));

// -----------------------------------------------------------------------

// ---> palindrome or not - a word, phrase, or sequence that reads the same backward as forward,

const isPalindrome = function (palindrome) {
  let input = palindrome.replace(/\s/g, "");
  let output = palindrome
    .replace(/\s/g, "")
    .toString()
    .split("")
    .reverse()
    .join("");
  let result;
  console.log(input);
  console.log(output);

  if (input === "") {
    result = "no input found";
    return result;
  }

  // if (input === output) {
  //   result = `${palindrome} is a palindrome`;
  // } else {
  //   result = `${palindrome} does not match the criteria of a palindrome.`;
  // }
  // return result;

  let result1 =
    input === output
      ? `"${palindrome}" is a palindrome`
      : `"${palindrome}" does not match the criteria of a palindrome.`;
  return result1;
};

console.log(
  isPalindrome("on a clover if alive erupts a vast pure evil a fire volcano")
);
