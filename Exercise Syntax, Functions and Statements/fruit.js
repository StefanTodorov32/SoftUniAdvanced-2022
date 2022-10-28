function fruit(fruit, grams, price){
    let kilo = grams/1000
    let result = kilo * price

    console.log(`I need $${result.toFixed(2)} to buy ${kilo.toFixed(2)} kilograms ${fruit}.`)
}
fruit('orange', 2500, 1.80)