function solve(arr){
    let result= []
    let biggest = arr[0]
    result = arr.reduce((prev, cur) =>{
        if(biggest <= cur){
            prev.push(cur)
            biggest = cur
        }
        return prev
    },[])
    return result
}
solve([20, 3, 2, 15, 6, 1])
solve([1, 2, 3, 4])