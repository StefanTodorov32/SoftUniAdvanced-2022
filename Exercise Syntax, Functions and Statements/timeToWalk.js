function time(steps, meters, kmh){
    let s = steps * meters / 1000
    console.log(s);
    let time = s / kmh
    console.log(time);

}
time(4000, 0.60, 5)