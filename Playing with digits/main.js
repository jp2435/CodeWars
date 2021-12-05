function digPow(n,p){
    const arr = n.toString().split('')
    var res = 0
    for(let num in arr){
        res += Number(arr[num])**p
        p+=1
    }
    if(Number.isInteger(res/n)){
        return res/n
    }else{
        return -1
    }
}

const num = 695
digPow(num,2)