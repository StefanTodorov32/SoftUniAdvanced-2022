function solve(input){
    
    let array = []
    for (let index = 1; index < input.length; index++) {
        let [, town, latitude, longtitude] = input[index].split('|')
        town = town.trim()
        latitude = Number(Number(latitude.trim()).toFixed(2))
        longtitude = Number(Number(longtitude.trim()).toFixed(2))
        let result = {}
        result["Town"] = town
        result["Latitude"] = latitude
        result["Longtitude"] = longtitude
        
        array.push(result)
    }
    console.log(JSON.stringify(array));
}
solve(['| Town | Latitude | Longitude |',

'| Sofia | 42.696552 | 23.32601 |',

'| Beijing | 39.913818 | 116.363625 |'])