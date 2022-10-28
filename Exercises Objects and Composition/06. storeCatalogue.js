function solve(input){
    let result = {}
    input.sort()
    input.forEach(l => {
        let [productName, productPrice] = l.split(':')
        let letter = productName[0];
        
        if(result.hasOwnProperty(letter) == false){
            result[letter] = {}
        }
        result[letter][productName] = +productPrice;
    })

    for (let [letter] of Object.entries(result)) {
        console.log(letter);
        for (let [productName, productPrice] of Object.entries(result[letter])) {
            productName = productName.trim()
            console.log(`  ${productName}: ${productPrice}`);
            
        }
    }
    
}

solve(
    [
     'Appricot:20.4',
     'Fridge:1500', 
     'TV:1499', 
     'Deodorant:10', 
     'Boiler:300', 
     'Apple:1.25', 
     'Anti-Bug Spray:15', 
     'T-Shirt:10'
    ]
)