function convertToRoman(num) {
 let current = num;
 const romanRef = [['M',1000],['D',500],['C',100],['L',50],['X',10],['V',5],['I',1]]
 let roman = [];
 function processRoman(lit,value){
   while(current-value>=0){
   current -= value;
   roman.push(lit);
 }
 }
romanRef.forEach((literal)=>processRoman(literal[0],literal[1]));
 
 return roman.join('').replace(/IIII|VIIII|XXXX|LXXXX|CCCC|DCCCC/g,(match)=>{
   switch(match){
     case 'IIII':return 'IV';break;
     case 'VIIII':return 'IX';break;
     case 'XXXX':return 'XL';break;
     case 'LXXXX':return 'XC';break;
     case 'CCCC':return 'CD';break;
     case 'DCCCC':return 'CM';break;
   }
 });
}
console.log(convertToRoman(2549));
