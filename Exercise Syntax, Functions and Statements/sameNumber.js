function sameNumber(num){
    let string = num.toString();
    let result = 0;
    is = true
    
    for(let i = 0; i < string.length; i++){
        if(string[i] !== string[1]){
            is = false
        }
        result += Number(string[i]);
    }

    console.log(is);
    console.log(result);
}
sameNumber(2222222)