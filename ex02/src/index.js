// Create a temps array here

var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
];

// End of temps array

function myArrayFunction(arr){
    var newTemps = [...arr];
    var averageDayTemp = [];
    // Only change code below this line

    for (i in newTemps[0]) {
        var sum = newTemps[0].reduce(function(a, b){
            return a + b;
        }, 0);
        sum = sum / newTemps[0].length;
    }
    averageDayTemp.push(sum);

    for (i in newTemps[1]) {
        var sum = newTemps[1].reduce(function(a, b){
            return a + b;
        }, 0);
        sum = sum / newTemps[1].length;
    }
    averageDayTemp.push(sum);

    for (i in newTemps[2]) {
        var sum = newTemps[2].reduce(function(a, b){
            return a + b;
        }, 0);
        sum = sum / newTemps[2].length;
    }
    averageDayTemp.push(sum);

    for (i in newTemps[3]) {
        var sum = newTemps[3].reduce(function(a, b){
            return a + b;
        }, 0);
        sum = sum / newTemps[3].length;
    }
    averageDayTemp.push(sum);

    for (i in newTemps[4]) {
        var sum = newTemps[4].reduce(function(a, b){
            return a + b;
        }, 0);
        sum = sum / newTemps[4].length;
    }
    averageDayTemp.push(sum);

    // Only change code above this line
    return averageDayTemp;
}

console.log(myArrayFunction(temps));  // Change this line
module.exports = myArrayFunction;