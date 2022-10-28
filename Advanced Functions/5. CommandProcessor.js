function solution(){
    let str = ''
    return {
        append:(otherString) => str += otherString,
        removeStart:(index) => str = str.substring(index),
        removeEnd:(index) => str = str.substring(0, str.length - index),
        print:() => console.log(str)
    }
}
let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();