function validity(x1, y1, x2, y2) {
    let distance;
 
    function checkValidDistance(point1x, point1y, point2x, point2y) {
        let distance2 = Math.sqrt((point2x - point1x)**2 + (point2y - point1y)**2);
        return distance2;
    }
    
    distance = checkValidDistance(x1, y1, 0, 0);
    if (Number.isInteger(distance)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }
 
    distance = checkValidDistance(x2, y2, 0, 0);
    if (Number.isInteger(distance)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
 
    distance = checkValidDistance(x1, y1, x2, y2);
    if (Number.isInteger(distance)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
validity(3, 0, 0, 4)
validity(2, 1, 1, 1)