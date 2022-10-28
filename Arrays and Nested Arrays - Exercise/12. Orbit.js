function solve(input){
    let rows = input[0];
    let cols = input[1]
    let startRow =  input[2]
    let startCol = input[3]


    let matrix = []

    for (let i = 0; i < rows; i++) {
        matrix[i] = ([])
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                matrix[row][col] = Math.max(Math.abs(rows - startRow),0)
                
            }
            
        }
    }
}


solve([4, 4, 0, 0])
