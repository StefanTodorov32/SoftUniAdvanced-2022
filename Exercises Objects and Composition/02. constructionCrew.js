function solve(worker){
    if(worker.dizziness == true){
        let hydration = (worker.weight * 0.1) * worker.experience
        worker.levelOfHydrated += hydration
        worker.dizziness = false
        return worker
    }else{
        return worker
    }
}
solve(
    { 
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true 
    }
    )
    solve({ weight: 120,

        experience: 20,
        
        levelOfHydrated: 200,
        
        dizziness: true })