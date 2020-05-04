function palindrome(str) {
    //remove anything not letters & numbers, lowecase all, make array
    let cleanStr = str.replace(/\W+|_/g, '').toLowerCase().split('');
    let cleanLen = cleanStr.length;
    let firstHalf = (cleanLen % 2 == 0) //string even length?
      ? cleanStr.slice(0, cleanLen/2) //return exact first half 
      : cleanStr.slice(0, Math.floor(cleanLen/2)); //return first half minus middle character
    //check first half against opposite end
    return firstHalf.every((letter, index) => letter == cleanStr[cleanLen-(index+1)]);
  }

/*test cases
console.log(palindrome("eyeye"));
console.log(palindrome("not a palindrome"));
*/