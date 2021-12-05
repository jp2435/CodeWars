function solution(str){
    const arr = str.split('')
    const reverse = arr.reverse()
    console.log(reverse.join(''))
    return reverse.join('')
}
const str1 = 'world'
const str2 = 'word'
solution(str1)
solution(str2)