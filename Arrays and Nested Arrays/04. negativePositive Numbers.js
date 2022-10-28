function solve(arr){
    let negative = []
    let positive = []
    arr.forEach(num =>{
        if(num < 0){
            negative.push(num)
        }else{
            positive.push(num)
        }
        
    })
    negative.sort()
    let concatArray = negative.concat(positive)
    concatArray.forEach(num =>{
        console.log(num) ;
    })
}
solve([7, -2, 8, 9])
solve([3, -2, 0, -1])