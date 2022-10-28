function solve(arr){
    let townObj = {}
    for (let data of arr) {
        town = data.split(' <-> ')[0]
        pop = Number(data.split(' <-> ')[1]) 

        if(townObj.hasOwnProperty(town)){
            pop += townObj[town]
        }
        townObj[town] = pop
        
    }
    for (const town in townObj) {
        console.log(`${town} : ${townObj[town]}`);
    }
    
}
solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);