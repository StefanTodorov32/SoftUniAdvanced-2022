function result(input){
    let res = {}
    res.model = input.model

    const smallEngine = {
        power: 90, 
        volume: 1800
    }
    const normalEngine = { 
        power: 120, 
        volume: 2400 
    }
    const monsterEngine= { 
        power: 200, 
        volume: 3500 
    }

    const hatchback = {
        type: 'hatchback',
        color: input.color
    }
    const coupe = { 
        type: 'coupe',
        color: input.color
    }

    if (input.power <= 90) {
        res.engine = smallEngine
    }else if(input.power <= 120){
        res.engine = normalEngine
    }else {
        res.engine = monsterEngine
    }
    
    if (input.carriage == 'hatchback'){
        res.carriage = hatchback
    }else if(input.carriage == 'coupe'){
        res.carriage = coupe
    }
    
    let size
    if (input.wheelsize % 2 == 0) {
        input.wheelsize--
        size = input.wheelsize
    }else{
        size = input.wheelsize
    }
    res.wheels = [size,size,size,size]
    
    return res
    
    
}
result(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14 
    }
    )
    result(
    {
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17 
    }
    )