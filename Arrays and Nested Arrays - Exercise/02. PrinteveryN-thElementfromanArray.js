function solve(arr, n){
    let pushedResult = []
    arr.map((x,i)=>{
        if(i % n == 0){
            pushedResult.push(x)
        } 
    })
    return pushedResult
}
solve(['5','20','31','4','20'],2)