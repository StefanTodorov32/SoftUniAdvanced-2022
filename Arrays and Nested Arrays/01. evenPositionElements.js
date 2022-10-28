function solve(arr){
    let arr1 = []

    for(let i=0; i < arr.length; i += 2){
        arr1.push(arr[i]);
    }
    console.log(arr1.join(' '));

}