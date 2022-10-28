

class Computer {
    constructor(model){
        this.model = model
    }

    get model(){
        return this._model
    }
    set model(value){
        let array = ['Asus', 'Microsoft', 'Rog', 'LG']
        for (const iterator of array) {
            if (value === iterator) {
                console.log(this._model = value)
            }
        }
    }
}
let myComputer = new Computer()
myComputer.model = 'Asus'