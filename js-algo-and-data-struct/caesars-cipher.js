function cipher(str) {
  let newStr = str.split('');
  return newStr
  .map((character)=>{
    if(/[A-Z]/.test(character)){
      return (character.charCodeAt(0)<78)?String.fromCharCode(character.charCodeAt(0)+13):String.fromCharCode(character.charCodeAt(0)-13);
    }
    else{
      return character
    }
  }).join('');
}

console.log(cipher("SERR PBQR PNZC"));
