function solve(input) {
    let initDashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]
    let isFirstPlayer = true;
    for (let coordinates of input) {
        let [x, y] = coordinates.split(" ")
 
        if (initDashboard[x][y]) {
            console.log(`This place is already taken. Please choose another!`);
            continue;
        }
        let marker = isFirstPlayer ? "X" : "O";
        initDashboard[x][y] = marker;
        if (checkWin(initDashboard, marker)) {
             console.log(`Player ${marker} wins!`);
             printTable(initDashboard)
             return 
        }
       
 
        
 
        if(!checkFreeSpace(initDashboard)){
            console.log("The game ended! Nobody wins :(")
            printTable(initDashboard)
            return
        }
 
 
        isFirstPlayer = !isFirstPlayer
    }
 
    function checkFreeSpace (initDashboard){
       
        for(let row = 0; row < initDashboard.length; row++){
            for (let col = 0; col < initDashboard[row].length; col++){
                if (!initDashboard[row][col]){
                    return true;
                   
                }
            }
        }
        return false;
    }
 
    function printTable(initDashboard){
        initDashboard.forEach(row => console.log(row.join("\t")));
    }
 
    function checkWin(initDashboard, marker){
        for (let i = 0; i < initDashboard.length; i++) {
            if (initDashboard[i][0] === marker &&
                initDashboard[i][1] === marker &&
                initDashboard[i][2] === marker
            ) {
                
                return true
            } else if (initDashboard[0][i] === marker &&
                        initDashboard[1][i] ===marker &&
                        initDashboard[2][i] ===marker ) {
               
                return true
            } else if (initDashboard[0][0] === marker &&
                        initDashboard[1][1] === marker && 
                        initDashboard[2][2] === marker){
                
                return true
            } else if (initDashboard[0][2] === marker &&
                        initDashboard[1][1] === marker &&
                        initDashboard[2][0] === marker) {
                
                return true
            } 
           
        }
        return false
    }
}
solve([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"
])
solve(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"])