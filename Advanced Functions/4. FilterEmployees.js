function solve(data, criteria){
    data = JSON.parse(data)
    //
    //for (let person of data) {
    //    let [key,value] = criteria.split('-')
    //    if (person[key] == value) {
    //        console.log(`${person.id - 1}. ${person.first_name} ${person.last_name} - ${person.email}`);
    //    }
    //}
    let[key,value] = criteria.split('-')
    
    let filtered = data.filter(e => e[key] === value)

    filtered.forEach((person, i) => {
        console.log(`${i}. ${person.first_name} ${person.last_name} - ${person.email}`);
    });
    

}
solve(`[{"id": "1","first_name": "Ardine","last_name": "Bassam","email": "abassam0@cnn.com","gender": "Female"}, {"id": "2","first_name": "Kizzee","last_name": "Jost","email": "kjost1@forbes.com","gender": "Female"},{"id": "3","first_name": "Evanne","last_name": "Maldin","email": "emaldin2@hostgator.com","gender": "Male"}]`,'gender-Female' )