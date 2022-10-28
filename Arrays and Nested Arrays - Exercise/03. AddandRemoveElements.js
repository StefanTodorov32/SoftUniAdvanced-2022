function solve(arr) {
    //let result =[]
    //let n = 1
    //for (const iterator of arr) {
    //    if(iterator === 'add'){
    //        result.push(n)
    //        n++
    //    }else if(iterator === 'remove'){
    //        result.pop()
    //        n++
    //    }
    //}
    //console.log(result);
    let result = []
    let n = 1
    arr.map((x)=>{
        if (x === 'add') {
            result.push(n)
            n++
        }else if(x === 'remove'){
            result.pop()
            n++
        }
    })
    if(result.length <= 0){
        console.log('Empty');
    }else{
        console.log(result.join('\n'));
    }
    
}
solve(['add', 'add', 'remove', 'add', 'add'])