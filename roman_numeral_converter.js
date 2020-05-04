function convertToRoman(num) {
  let romanNumerals = {
    0: ['I', 'V', 'X'],
    1: ['X', 'L', 'C'],
    2: ['C', 'D', 'M'],
    3: ['M', 'M5', 'M10']   // test cases only went up to 3999, but allowed for code up to 9999
  }                         //although it would look weird
  let number = String(num).split('').reverse();

  function converter(numb, set) {
    if (numb < 4) {
      let romI = '';
      while (romI.length < numb) {
        romI += set[0];
      }
      return romI;
    } else if (numb == 4) {
      return set[0] + set[1];
    } else if (numb < 9) {
      return set[1] + converter(numb - 5, set);
    } else if (numb == 9) {
      return set [0] + set[2];
    }
  }

  let result = []
  for (let i = 0; i<number.length; i++) {
    let romanNumb = converter(number[i], romanNumerals[i])
    result.push(romanNumb);
  }
  return result.reverse().join('');
}
/* test cases
console.log(convertToRoman(3));
*/
