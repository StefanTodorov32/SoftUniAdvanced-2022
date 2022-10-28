function previousDay(y,m,d){
    const date1 = new Date(y,m+1,d);
    date1.setDate(date1.getDate() - 1)
    console.log(`${date1.getFullYear()}-${date1.getMonth()-1}-${date1.getDate()}`)
}
previousDay(2016, 10, 1)