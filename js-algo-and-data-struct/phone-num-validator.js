function telephoneCheck(str) {
  let countryCodeAndLada = '^((\\d{3}|\\x28\\d{3}\\x29)(\\s|-|)|1\\s?(\\d{3}|\\x28\\d{3}\\x29)(\\s|-|))';//Three numbers followed by a space,dash or nothing, could be inside parentheses OR the same but with country code
  let firstThree = '\\d{3}(\\s|-|)';//Three numbers followed by a space, dash or nothing.
  let lastFour = '\\d{4}$';//Four numbers at the end
  let telephoneRegex = new RegExp(countryCodeAndLada+firstThree+lastFour)
  console.log(telephoneRegex);
  return telephoneRegex.test(str);
}

console.log(telephoneCheck("555 (555)-5555"));
