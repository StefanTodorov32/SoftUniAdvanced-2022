class List {
  constructor() {
    this.arr = [];
    this.size = this.sizeArr()
  }
  add(el) {
    this.arr.push(el);
    this.arr.sort((a, b) => a - b);
    this.size = this.sizeArr()
  }
  remove(index) {
    if (index >= 0 && index <= this.size - 1) {
      this.arr.splice(index, 1);
      this.arr.sort((a, b) => a - b);
      this.size = this.sizeArr()
    }
  }
  get(index) {
    return this.arr[index];
  }
  sizeArr() {
    return this.arr.length;
  }
}
let list = new List();

list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
