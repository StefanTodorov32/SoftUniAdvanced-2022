function solve(input){
    let arr = []
    for (const heroes of input) {
        let [name, level, items] = heroes.split(' / ')
        level = Number(level)
        items = items ? items.split(', ') : []
        arr.push({name,level, items})
    }
    console.log(JSON.stringify(arr));
    
}
solve(['Isacc / 25 / Apple, GravityGun','Derek / 12 / BarrelVest, DestructionSword','Hes / 1 / Desolator, Sentinel, Antara'])
solve(['Jake / 1000 / Gauss, HolidayGrenade'])