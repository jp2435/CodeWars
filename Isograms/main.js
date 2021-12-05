function isIsogram(str){
    str = str.toLowerCase()
    for(let i = 0; i<str.length ; i++){
        for(let j = i+1; j<str.length; j++){
            if(str[i] === str[j]){
                return false
            }
        }
    }
    return true
}

const str1 = "Dermatoglyphics"
const str2 = "aba"
const str3 = "moOse"

isIsogram(str1)
isIsogram(str2)
isIsogram(str3)
