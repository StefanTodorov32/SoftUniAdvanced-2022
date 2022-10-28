class Restaurant{
    constructor (budget){
        this.budgetMoney = budget
        this.menu = {}
        this.stockProducts = {}
        this.history = []
    }
    loadProducts(arr){
        arr.forEach(element => {
            let [name,quantity,totalPrice] = element.split(' ')
            quantity = Number(quantity)
            totalPrice = Number(totalPrice)
            if (totalPrice <= this.budgetMoney) {
                if (!this.stockProducts.hasOwnProperty(name)) {
                    this.stockProducts[name] = 0
                }
                this.stockProducts[name] += quantity
                this.budgetMoney -= totalPrice
                this.history.push(`Successfully loaded ${quantity} ${name}`)
            }else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`)
                
            }
        });
        return this.history.join('\n')
    }
    addToMenu(meal, products, price){
        if (meal in this.menu) {
            return `The ${meal} is already in the our menu, try something different.`
        }
        let prod = {}
        products.forEach(product => {
            let [productName, productQuantity] = product.split(' ')
            prod[productName] = Number(productQuantity)
        });
        this.menu[meal] = {prod,price}
        if (Object.keys(this.menu).length === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        }else{
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
        }
    }
    showTheMenu(){
        let res = []
        if (Object.keys(this.menu).length === 0) {
            return "Our menu is not ready yet, please come later..."
        }
        for (const key in this.menu) {
            res.push(`${key} - $ ${this.menu[key].price}`)
        }
        return res.join('\n')
    }
    makeTheOrder(meal){
        if (!(meal in this.menu)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        for (const product in this.menu[meal].products) {
            if (!(product in this.stockProducts) || this.stockProducts[product] < this.menu[meal].products[product]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }
        }
        for (const product in this.menu[meal].products) {
            this.stockProducts[product] -= this.menu[meal].products[product];
            
        };
        this.budgetMoney += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;

    }
}
let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));


