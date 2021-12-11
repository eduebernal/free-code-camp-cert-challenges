function palindrome(str) {
  let originalStr = str.replace(/[^a-z0-9]|\s/gi,'').toLowerCase();
  let reversedArr = [];
  originalStr.split('').forEach((letter)=>reversedArr.unshift(letter));
  let reversedStr = reversedArr.join('')
  console.log(originalStr,reversedStr)
  return (originalStr==reversedStr);
}

palindrome("2A3 *3a_*#2");
