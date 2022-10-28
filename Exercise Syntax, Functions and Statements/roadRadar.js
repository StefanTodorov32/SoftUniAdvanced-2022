function roadRadar(speed, area){
    let motorway = 130
    let interstate = 90
    let city = 50
    let residential= 20
    

    switch(area){
        case 'motorway':
            if(speed <= motorway){
                console.log(`Driving ${speed} km/h in a ${motorway} zone`);
            }else{
                let diff = speed - motorway
                let status
                if(diff <= 20){
                    status = 'speeding'
                }else if(20 < diff && diff <= 50){
                    status = 'excessive speeding'
                }else{
                    status = 'reckless driving'
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorway} - ${status}`);
            }
            break
        case 'interstate':
            if(speed <= interstate){
                console.log(`Driving ${speed} km/h in a ${interstate} zone`);
            }else{
                let diff = speed - interstate
                let status
                if(diff <= 20){
                    status = 'speeding'
                }else if(20 < diff && diff <= 50){
                    status = 'excessive speeding'
                }else{
                    status = 'reckless driving'
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${interstate} - ${status}`);
            }
            break
        case 'residential':
            if(speed <= residential){
                console.log(`Driving ${speed} km/h in a ${residential} zone`);
            }else{
                let diff = speed - residential
                let status
                if(diff <= 20){
                    status = 'speeding'
                }else if(20 < diff && diff <= 50){
                    status = 'excessive speeding'
                }else{
                    status = 'reckless driving'
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${residential} - ${status}`);
            }
            break
        case 'city':
            if(speed <= city){
                console.log(`Driving ${speed} km/h in a ${city} zone`);
            }else{
                let diff = speed - city
                let status
                if(diff <= 20){
                    status = 'speeding'
                }else if(20 < diff && diff <= 50){
                    status = 'excessive speeding'
                }else{
                    status = 'reckless driving'
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${city} - ${status}`);
            }
            break
    }
}
roadRadar(120, 'interstate')