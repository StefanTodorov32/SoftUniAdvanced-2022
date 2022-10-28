function solution(number){
    let result = number

    return (num1) => result + num1

}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3)); 