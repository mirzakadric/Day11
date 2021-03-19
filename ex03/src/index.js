// Create a myPetsArray here

var myPetsArray = ["Dog", "Cat"];

// End of myPetsArray array

function myArrayFunction(myPets){
    var myNewPets = [...myPets];

    // Only change code below this line

    myNewPets.push("Bird", "Fish");
    var firstPet = [];
    firstPet.push(myNewPets[0]);
    var lastPet = [];
    lastPet.push(myNewPets[myNewPets.length - 1]);

    myNewPets.shift("Dog");

    myNewPets.unshift("Lion");

    myNewPets.pop();

    return myNewPets;

    // Only change code above this line
}

console.log(myArrayFunction(myPetsArray)); // Change this line
module.exports = myArrayFunction;