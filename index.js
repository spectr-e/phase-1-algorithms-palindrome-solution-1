function reverse(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  const reversed = reverse(word);
  return reversed === word;
}
/* 
  Add your pseudocode here
  declare a function that:
    takes a string argument
    reverses it
    then compares it with the original word
    returns true if they match, false if they dont
*/

/*
  Add written explanation of your solution here
  declared a function called isPalindrome -> takes string argument called word
    initialize a variable called reversed to hold the reversed 'word' string by passing a reverse function
    returns true if reversed is equals to word
  declared a function called reverse -> takes a string arguement called word
    this functions:
      1. splits the word into a new array of its chars
      2. passess a reverse() method on the new array
      3. converts the reversed array into a string using join()
      4. returns the new reversed string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
