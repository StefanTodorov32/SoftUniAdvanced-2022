function solve(arr,n){
    for (let i = 0; i < n; i++) {
        let firstIndex = arr.pop()
        arr.unshift(firstIndex)
    }
    console.log(arr.join(' '));
    
}
solve(['1','2','3','4'],2)
solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15)