function sortingNums(arr){
    let result = []
    let arrlenght = arr.length / 2
    for(let i = 0; i < arrlenght; i++){
        arr.sort((a,b) => a-b)
        result.push(arr[0])
        arr.splice(0,1)
        arr.sort((a,b) => b - a)
        result.push(arr[0])
        arr.splice(0,1)
    }
    return (result);
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])