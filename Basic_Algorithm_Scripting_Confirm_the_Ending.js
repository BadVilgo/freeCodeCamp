/*
=================TASK==============================================================================================
Basic Algorithm Scripting: Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

*/

//======================================MY_SOLUTION================================================================


function confirmEnding(str, target) {
    let n = str.split(' ');
    let lastWord = n[n.length-1];
    let check = lastWord.substring(lastWord.length,lastWord.length-target.length);
    
    return check === target ? true : false;
  }
  //confirmEnding("He has to give me a new name", "name");
  //confirmEnding("Bastian", "n");
  //confirmEnding("Connor", "n")
  console.log(confirmEnding("Connor", "n"));
  console.log(confirmEnding("He has to give me a new name", "name"));
  
  
  
  //last word is or contains target
  //zwróć ostatnie słowo
  //sprawdź czy zawiera w sobie target
  //str.includes(target, str.length);
  
  
  
  /*
  =====================================TESTS========================================================================
confirmEnding("Bastian", "n") should return true.
Passed
confirmEnding("Congratulation", "on") should return true.
Passed
confirmEnding("Connor", "n") should return false.
Passed
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
Passed
confirmEnding("He has to give me a new name", "name") should return true.
Passed
confirmEnding("Open sesame", "same") should return true.
Passed
confirmEnding("Open sesame", "pen") should return false.
Passed
confirmEnding("Open sesame", "game") should return false.
Passed
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
Passed
confirmEnding("Abstraction", "action") should return true.
Passed
Your code should not use the built-in method .endsWith() to solve the challenge.

  */