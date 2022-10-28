function solve(arr){
    arr.sort(function(a, b) {
        if(a.length !== b.length){
            return a.length - b.length
        }else{
            return a.localeCompare(b)
        }
      });
      console.log(arr);
}
solve(['alpha', 'beta', 'gamma'])
solve([['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']])