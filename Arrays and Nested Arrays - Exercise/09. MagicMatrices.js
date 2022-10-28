function solve(arr){

    
    for (let i = 0; i < arr.length - 1; i++) {
        let rowSumOne = 0
        let rowSumTwo = 0
        let colSumTwo = 0
        let colSumOne = 0
        arr[i].forEach(num => {
            rowSumOne =num
        });
        arr[i+1].forEach(num => {
            rowSumTwo =num
        });
        for (let c = 0; c < arr[i].length; c++) {
            colSumOne +=arr[i][c]
            colSumTwo +=arr[i + 1][c]
            
        }
        if (rowSumOne !== rowSumOne || colSumTwo !==colSumTwo) {
            console.log(false);
        }
    }
    
    
}
solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])
solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])