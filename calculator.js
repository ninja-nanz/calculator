// get history value 
function getHistory() {
    return document.getElementById("history-value").innerText;

}

// push to history value
function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}


// Get the output value
function getOutput() {
    return document.getElementById("output-value").innerText;

}

// push to output value
function printOutput(num) {
    if(num==="") {
        document.getElementById("output-value").innerText
    } else {
    document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}


//format the number 
function getFormattedNumber(num) {
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value
}

// reverse formatted number for calculations
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ""));
}


// get operations 
var operator = document.getElementsByClassName("operator");

// add a click event to all operators 
for (var i=0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
       if(this.id==="clear"){  //if clear button is clicked 
           printHistory(" ");
           printOutput(" ");
        } else {
            var output = getOutput();
            var history = getHistory();
            if (output!=" ") {
                output=reverseNumberFormat(output);
                history=history+output;
                if(this.id==="total") {
                    var result=eval(history);
                    printOutput(result);
                    printHistory(" ");
                } else {
                    history = history+this.id;
                    printHistory(history);
                    printOutput(" ");
                }
            } 
        }
    });
}
 


// get number
var number = document.getElementsByClassName("number");

// click event for all numbers
for (var i=0; i < number.length; i++) {
    number[i].addEventListener('click', 
        function () {
            var output = reverseNumberFormat(getOutput());
            if (output != NaN) { // if output is a number
                output =  output+this.id; //concatenate the number
                printOutput(output);
            }
        }
    );
}


///////////////////// OLD PSEUDOCODE ////
// setup gobal variables


// get the numbers and create an array 

// cannot have multiple decimal points


// cannot start with operators or more than one 0 , except "-"

// cannot have multiple consecutive operators, use only the last operator clicked


// clear the calculator 


// create the equation from the array


// calculate the equation 


// use answer from previous equation for new equation 


//display the result when "=" is clicked 

// --- handlers for displaying numbers when clicked 
