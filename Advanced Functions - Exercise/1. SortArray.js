function solve(arr, arg){
    if (arg === 'asc') {
        return sortAsc()
    }else if (arg === 'desc') {
        return sortDesc()
    }

    function sortAsc(){
        arr.sort((a,b) => a - b)
        return arr
    }
    function sortDesc(){
        arr.sort((a,b) => b - a )
        return arr
    }
}
solve([14, 7, 17, 6, 8], 'asc')
solve([14, 7, 17, 6, 8], 'desc')