//particular converter for a rot13 substitution

function rot13(str) {
  let A = 65, Z = 90, result = '';
  for (let char = 0; char < str.length; char++){
    let strChar = str.charCodeAt(char);
    if (strChar >=A && strChar <=Z) {
      if (strChar - 13 < A){
        result += String.fromCharCode((Z + (strChar - A)) - 12);
      } else {
        result += String.fromCharCode(strChar - 13);
      }
    } else {
      result += str[char];
    }
  }

  return result;
}

console.log(rot13("SERR PBQR PNZC"));
