function solve(...params){
    let result = {}
   

    for (const input of params) {
        console.log(`${typeof(input)}: ${input}`);
        if (!result.hasOwnProperty(typeof(input))) {
            result[typeof(input)] = 0
        }
        result[typeof(input)] = result[typeof(input)] + 1
    }
    let buff = ""
    for (const key in result) {
        buff +=`${key} = ${result[key]}\n`
        
    }
    console.log(buff);
}
solve('cat', 42, function () { console.log('Hello world!'); })