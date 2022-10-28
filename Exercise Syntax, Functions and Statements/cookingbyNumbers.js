function cooking(num, first, second, third, fourth, fifth) {
    num = Number(num)
    array = [first, second, third, fourth, fifth]
    array.forEach(el=>{
        switch(el){
            case 'chop':
                num = num / 2
                console.log(num);
                break
            case 'dice':
                num = Math.sqrt(num)
                console.log(num);
                break
            case 'spice':
                num += 1
                console.log(num);
                break
            case 'bake':
                num = num * 3
                console.log(num);
                break
            case 'fillet':
                num = num - (num / 5)
                console.log(num);
                break
        }
    })

    

}
cooking('9', 'dice', 'spice', 'chop', 'bake','fillet')