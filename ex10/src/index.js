// Only change code below this line

function mySplice (arr1, arr2, n){
    var newArr = arr2.splice(n);

    return arr2.concat(arr1.reverse().concat(newArr));
}

// Only change code above this line

console.log(mySplice([1, 2, 3], [4, 5], 1));  // Change this line
console.log(mySplice([1, 2, 3], [4, 5], 2));  // Change this line
console.log(mySplice(["b", "c"], ["a", "d"], 1));  // Change this line
console.log(mySplice(["Dell", "Philips"], ["Samsung", "Aox", "Sony"], 2));  // Change this line
module.exports = mySplice;