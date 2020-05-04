//check for valid US phone number

function telephoneCheck(str) {
  let strChar = str.match(/[\d()-\s]/g)
  let strBrac = str.match(/[()]/g)
  let bracReg = /[()]/;
  let strNumb = str.match(/\d/g)

  return (str.length == strChar.length) 
    ? ((strBrac <1 || strBrac.length % 2 == 0) && (!bracReg.test(str[0]) || !bracReg.test(str[str.length-1])))
      ? (strNumb.length == 10 || (strNumb.length == 11 && str[0] == 1))
        ? true
        :false
      : false
    : false
}

console.log(telephoneCheck("(555)555-5555"));
