// Only change code below this line

function multiplyArrayFunction(myArray){
    var myArray = [...myArray];
    var product;

    var sum = myArray.flat().reduce((a, b) => a + b, 0);
    var product = myArray.flat().reduce(function(a, b) {
        return a * b;
    });
    var arr = [product, sum];
    return arr;
}
// Only change code above this line

console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]]));  // Change this line
console.log(multiplyArrayFunction([[2.5, 2], [0.5, 0.2], [8]]));  // Change this line
console.log(multiplyArrayFunction([[1, 2], [3, 4, 5, 6], [7, 8, 9]]));  // Change this line
module.exports = multiplyArrayFunction;