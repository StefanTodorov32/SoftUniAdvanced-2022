class VegetableStore{
    constructor(owner, location){
        this.owner = owner
        this.location = location
        this.availableProducts = []
    }
    loadingVegetables(vegetablesArr){
        let types = []
        vegetablesArr.forEach(vegetable => {
            let [type, quantity, price] = vegetable.split(' ')
            quantity = Number(quantity)
            price = Number(price)
            let found = this.availableProducts.find(x => x.type === type)
            if (found) {
                found.quantity += quantity
                if (found.price < price) {
                    found.price = price
                }
            }else{
                
                this.availableProducts.push({type, quantity, price})
                types.push(type)
            }
        });
        return `Successfully added ${types.join(', ')}`
    }
    buyingVegetables(selectedProducts){
        let totalPrice = 0
        selectedProducts.forEach(product => {
            let [type, quantity] = product.split(' ')
            let prod = this.availableProducts.find(x => x.type === type)
            if (!prod) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            if (quantity > prod.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            let cartPrice = Number(prod.price) * quantity
            totalPrice += cartPrice
            prod.quantity -= quantity
        });
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }
    rottingVegetable(type, quantity){
        let product = this.availableProducts.find(x => x.type === type)
        if (!product) {
            throw new Error(`${type} is not available in the store.`)
        }
        if (quantity > product.quantity) {
            product.quantity = 0
            return `The entire quantity of the ${type} has been removed.`
        }else{
            product.quantity -= quantity
            return `Some quantity of the ${type} has been removed.`

        }
    }
    revision(){
        let buff = []
        this.availableProducts.sort((a,b) => a.price - b.price)
        buff.push("Available vegetables:")
        this.availableProducts.forEach(product =>{
            buff.push(`${product.type}-${product.quantity}-$${product.price}`)
        })
        buff.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)
        return buff.join('\n').trim()
    }
}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

