/*
=================TASK==============================================================================================
Basic Algorithm Scripting: Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

//======================================MY_SOLUTION================================================================
function findLongestWordLength(str) {
  let arr = str.split(' ');
  let numbers = [];
  for(let i=0; i<arr.length; i++){
    numbers.push(arr[i].length);
  }
  return Math.max(...numbers);
}
//findLongestWordLength("The quick brown fox jumped over the lazy dog");
//console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
//console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
//console.log(findLongestWordLength("May the force be with you"));



//1. daj słowa do arraya // done
//2. każde słowo w arrayu dostaje liczbe znaków // string.length //done
//3. Ze wszystkich liczb wybieram najwyższą Math.max() i robię return



/*
=====================================TESTS========================================================================
findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
Passed
findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
Passed
findLongestWordLength("May the force be with you") should return 5.
Passed
findLongestWordLength("Google do a barrel roll") should return 6.
Passed
findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
Passed
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.
*/