function solution(){
    let microElements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    let meals ={
        apple: {
            carbohydrate: 1,
            flavours: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavours: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavours: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavours: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            flavour: 10
        }
    }
    return function (string){
        let tokens = string.split(' ')
        let command = tokens[0]
        let element = tokens[1]
        let num = Number(tokens[2])
        
        

        if (command === 'restock') {
            if (element === 'protein') {
                microElements.protein += num
            }else if(element === 'fat'){
                microElements.fat += num
            }else if(element === 'carbohydrate'){
                microElements.carbohydrate += num
            }else if(element === 'flavour'){
                microElements.flavour += num
            }
            return 'Success'
        }else if(command === 'prepare'){
            if (element === 'apple') {
                microElements.carbohydrate -= meals.apple.carbohydrate * num
                microElements.flavour -= meals.apple.flavours * num
                if (microElements.carbohydrate < 0) {
                    return `Error: not enough carbohydrate in stock`
                }else if(microElements.flavour < 0){
                    return `Error: not enough flavour in stock`
                }
                
            }else if (element === 'lemonade'){
                microElements.carbohydrate -= meals.lemonade.carbohydrate * num
                microElements.flavour -= meals.lemonade.flavours * num
                if (microElements.carbohydrate < 0) {
                    return `Error: not enough carbohydrate in stock`
                }else if(microElements.flavour < 0){
                    return `Error: not enough flavour in stock`
                }
                
            }else if (element === 'burger'){
                microElements.carbohydrate -= meals.burger.carbohydrate * num
                microElements.flavour -= meals.burger.flavours * num
                microElements.fat -= meals.burger.fat * num
                if (microElements.carbohydrate < 0) {
                    return `Error: not enough carbohydrate in stock`
                }else if(microElements.flavour < 0){
                    return `Error: not enough flavour in stock`
                }else if (microElements.fat < 0){
                    return `Error: not enough fat in stock`
                }
                
            }else if (element === 'egg'){
                microElements.protein -= meals.eggs.protein * num
                microElements.flavour -= meals.eggs.flavours * num
                microElements.fat -= meals.eggs.fat * num
                if (microElements.protein < 0) {
                    return `Error: not enough protein in stock`
                }else if(microElements.flavour < 0){
                    return `Error: not enough flavour in stock`
                }else if (microElements.fat < 0){
                    return `Error: not enough fat in stock`
                }
                
            }else if (element === 'turkey'){
                microElements.protein -= meals.turkey.protein * num
                microElements.carbohydrate -= meals.turkey.carbohydrate * num
                microElements.fat -= meals.turkey.fat * num
                if(microElements.carbohydrate < 0){
                    return `Error: not enough carbohydrate in stock`
                }else if (microElements.protein < 0) {
                    return `Error: not enough protein in stock`
                }
                else if (microElements.fat < 0){
                    return `Error: not enough fat in stock`
                }
                
            }
            
        }else if('report'){
            let buff = ''
            for (const [key, value] of Object.entries(microElements)) {
                buff += `${key} = ${value} `
            }
            return buff
        }
    }
}
let manager = solution ();
console.log (manager ("restock flavour 10")); // Success
console.log (manager ("prepare apple 1")); // Error: not enough carbohydrate in stock 
console.log (manager ("report burger 4"))