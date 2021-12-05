function solution(str, ending){
    if (str.slice(str.length-ending.length, str.length) === ending){
        return true
    }else{
        return false
    }
}

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

/*
function solution(str, ending){
  return str.endsWith(ending);
}
*/