// Create a monitorsListArray array here

var monitorsListArray = ["Apple", "Peach", "Berry"];

// End of monitorsListArray array

function myMonitorsFunction(arr){
    var newMonitorsList = [...arr];
    // Only change code below this line

    for (i = 0; i < newMonitorsList.length; i++){
        newMonitorsList.unshift([newMonitorsList[newMonitorsList.length - 1], (i-3)*-1]);
        newMonitorsList.pop();
    }

    return newMonitorsList;
    // Only change code above this line
}

console.log(myMonitorsFunction(monitorsListArray));  // Change this line
module.exports = myMonitorsFunction;