function solve(arr){
    arr.sort((a,b)=>{
        return a - b
    })
    let save = arr.splice(0,2)
    console.log(save);
}
solve([30, 15, 50, 5])
solve([3, 0, 10, 4, 7, 3])