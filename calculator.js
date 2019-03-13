// setup gobal variables
var total = 0;

// get the numbers and create an array 
function getNumber() {
    for (var i=0, i < )
    
}
// cannot have multiple decimal points


// cannot start with operators or more than one 0 , except "-"

// cannot have multiple consecutive operators, use only the last operator clicked


// clear the calculator 


// create the equation from the array


// calculate the equation 


// use answer from previous equation for new equation 



//display the result when "=" is clicked 

// --- handlers for displaying numbers when clicked 
var handlers = {
    clickButton: function() {
        document.getElementById("steps").innerHTML = getNumber()
    },

    clearCalc: function() {
        document.getElementById("steps").innerHTML = "clear"
    },

    showTotal: function() {
        document.getElementById("steps").innerHTML = "="
    },
}

