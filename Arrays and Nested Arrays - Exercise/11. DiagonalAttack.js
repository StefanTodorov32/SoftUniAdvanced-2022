function solve(matrixString){
    let firstDiagonalSum = 0
    let secondDiagonalSum = 0

    let matrix = []

    for (const num of matrixString) {
        matrix.push(num.split(' '))
        
    }

    for (let i = 0; i < matrix.length; i++) {
        firstDiagonalSum += Number(matrix[i][i])
        secondDiagonalSum += Number(matrix[i][matrix.length-i-1])
      }

    
    if (firstDiagonalSum == secondDiagonalSum) {
        for(let row = 0; row < matrix.length; row++){
            for(let col = 0; col < matrix[row].length; col++){
                if(row == col){
                    continue;
                }
                if(row + col == matrix.length-1){
                    continue;
                }

                matrix[row][col] = firstDiagonalSum;
            }
        }
    }

    for (const row of matrix) {
        console.log(row.join(' '));
    }

    

}
solve([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
    ])
console.log("--------------");
solve(['1 1 1',
       '1 1 1',
       '1 1 0'])