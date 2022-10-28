function solve(n,k){
    let arr = []
    let sum = 0
    arr.push(1)
    for(let i = 1; i < n; i++){
        let arr1 = arr.slice(-k)
        arr1.forEach(b =>{
            sum += b
        })
        arr.push(sum)
        sum = 0
    }
    return arr
}