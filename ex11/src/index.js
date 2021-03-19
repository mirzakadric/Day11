// Only change code below this line

function splitArrayInGroups(arr, n) {
    var remaindr = 0
    result = []

    while (remaindr < arr.length) {
    if (remaindr % n === 0) result.push([])
    result[result.length - 1].push(arr[remaindr++])
    }

  return result
}


// Only change code above this line

console.log(splitArrayInGroups(["a", "b", "c", "d"], 2));  // Change this line
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));  // Change this line
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5], 2));  // Change this line
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));  // Change this line
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));  // Change this line

module.exports = splitArrayInGroups;