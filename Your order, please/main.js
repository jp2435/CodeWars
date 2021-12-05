function order(words){
  
    return words.split(' ').sort(function(a,b){
      return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
  }

const str1 = "is2 Thi1s T4est 3a"
const str2 = "4of Fo1r pe6ople g3ood th5e the2"
const str3 = ""

console.log(`Str1:\n ${order(str1)}`)
console.log(`Str2:\n ${order(str2)}`)
console.log(`Str3:\n ${order(str3)}`)