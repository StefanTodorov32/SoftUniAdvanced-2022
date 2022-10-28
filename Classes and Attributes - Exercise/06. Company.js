class Company{
    constructor(){
        this.departments = {}
    }
    addEmployee(name, salary, position, department){
        if(!this.departments[department]){
            this.departments[department]={
                avgSalary: 0,
                sumSalary:0,
                employees:[]
            }
        }
        this.departments[department].employees.push({name, salary, position})
        this.departments[department].sumSalary += Number(salary)
        this.departments[department].avgSalary = this.departments[department].sumSalary / this.departments[department].employees.length
        return  `New employee is hired. Name: ${name}. Position: ${position}`
    }
    bestDepartment(){
        let bestDepart = Object.entries(this.departments).sort((a,b)=>a.avgSalary - b.avgSalary)[0]
        let sortEmployees = bestDepart[1].employees.sort((a,b)=> b.salary - a.salary || a.name.localeCompare(b.name))
        let buff = `Best Department is: ${bestDepart[0]}\n`
        buff += `Average salary: ${bestDepart[1].avgSalary.toFixed(2)}\n`
        for (let index = 0; index < sortEmployees.length; index++) {
            let emp = sortEmployees[index]
            buff += `${emp.name} ${emp.salary} ${emp.position}`
            buff += index ===sortEmployees.length - 1 ? '' : '\n' 
            
        }
        
        return buff
        
    }

}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
