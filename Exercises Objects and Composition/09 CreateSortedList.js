function createSortedList() {
    let result = {
        size: 0,
        arr: [],
        add(element) {
            result.arr.push(element);
            result.size++;
            result.arr.sort((a, b) => a - b);
        },
        remove(index) {
            if(result.arr[index]==undefined ){
                return undefined;
            } else {    
                result.arr.splice(index, 1);
                result.size--;
                result.arr.sort((a, b) => a - b);
            } 
         
        },
        get(index) { 
            if(result.arr[index]==undefined) {
                return undefined;
            } else {
                return result.arr[index];
            }
        }
    };

    return result;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7); 
console.log(list.get(1)); 
list.remove(1); 
console.log(list.get(1));