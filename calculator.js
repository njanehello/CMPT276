
// Variable declaration and initialization 

//Variables for input weight 
var totalWeight = 0.0;
var weight1 = 0.0;
var weight2 = 0.0;
var weight3 = 0.0;
var weight4 = 0.0;
var weightArray = [0.0,0.0,0.0,0.0];
var validWeightArray = [0.0,0.0,0.0,0.0];


//Variables input values 

var inputNum1 = 0.0;
var inputNum2 = 0.0;
var inputNum3 = 0.0;
var inputNum4 = 0.0;
var inputDen1 = 0.0;
var inputDen2 = 0.0;
var inputDen3 = 0.0;
var inputDen4 = 0.0;
var grade1 = 0.0;
var grade2 = 0.0;
var grade3 = 0.0;
var grade4 = 0.0;

var validGradeArray = [0.0,0.0,0.0,0.0];
var gradesArray = [0.0,0.0,0.0,0.0];
var meanDivisior = 0.0;

// Results
var finalWeightArray = [0.0,0.0,0.0,0.0];
var result = 0.0;

/*
Function to reset all variables back to zero
*/
function resetToZero() {
    totalWeight = 0.0;
    weight1 = 0.0;
    weight2 = 0.0;
    weight3 = 0.0;
    weight4 = 0.0;
    weightArray = [0.0,0.0,0.0,0.0];
    validWeightArray = [0.0,0.0,0.0,0.0];

    var inputNum1 = 0.0;
    var inputNum2 = 0.0;
    var inputNum3 = 0.0;
    var inputNum4 = 0.0;
    var inputDen1 = 0.0;
    var inputDen2 = 0.0;
    var inputDen3 = 0.0;
    var inputDen4 = 0.0;
    var grade1 = 0.0;
    var grade2 = 0.0;
    var grade3 = 0.0;
    var grade4 = 0.0;

    validGradeArray = [0.0,0.0,0.0,0.0];
    gradesArray = [0.0,0.0,0.0,0.0];
    meanDivisior = 0.0;

    finalWeightArray = [0.0,0.0,0.0,0.0];
    result = 0.0;
}


function checkInputWeights() {
    weight1 = parseFloat(document.querySelector("#Weight1").value);
    weight2 = parseFloat(document.querySelector("#Weight2").value);
    weight3 = parseFloat(document.querySelector("#Weight3").value);
    weight4 = parseFloat(document.querySelector("#Weight4").value);
}
/*
Functions to parse grade inputs and convert to float
*/
function checkInputA1() {
    inputNum1 = parseFloat(document.querySelector("#numeratorValue1").value);
    inputDen1 = parseFloat(document.querySelector("#denominatorValue1").value);
}
function checkInputA2() {
    inputNum2 = parseFloat(document.querySelector("#numeratorValue2").value);
    inputDen2 = parseFloat(document.querySelector("#denominatorValue2").value);
}

function checkInputA3() {
    inputNum3 = parseFloat(document.querySelector("#numeratorValue3").value);
    inputDen3 = parseFloat(document.querySelector("#denominatorValue3").value);
}

function checkInputA4() {
    inputNum4 = parseFloat(document.querySelector("#numeratorValue4").value);
    inputDen4 = parseFloat(document.querySelector("#denominatorValue4").value);
}

/*
Function to return the unweighted or weighted average of the grades entered
@param weighted - true or false for weighted or unweighted, respectively.
@returns the weighted or unweighted result as specified.
*/

function calculate(weighted) {

    // Check grades entered and convert to float
    checkInputA1();
    chekcInputA2();
    checkInputA3();
    checkInputA4();

    // If grades are entered and valid then mark which grades are valid
    if (inputDen1 > 0.0) {
        gradesArray[0] = inputNum1 / inputDen1;
        validGradeArray[0] = 1.0;
    } else {
        gradesArray[0] = 0.0;
    }

    if (inputDen2 > 0.0) {
        gradesArray[1] = inputNum2 / inputDen2;
        validGradeArray[1] = 1.0;
    } else {
        gradesArray[1] = 0.0;
    }

    if (inputDen3 > 0.0) {
        gradesArray[2] = inputNum3 / inputDen3;
        validGradeArray[2] = 1.0;
    } else {
        gradesArray[2] = 0.0;
    }

    if (inputDen4 > 0.0) {
        gradesArray[3] = inputNum4 / inputDen4;
        validGradeArray[3] = 1.0;
    } else {
        gradesArray[3] = 0.0;
    }
        
    // If weighted is picked
    if (weighted) {
        // Assign weights, must check if any are empty
        checkInputWeights()
        
        // Check if weights are valid and mark the ones that are
        if (weight1 > 0 && validGradeArray[0] > 0) {
            weightArray[0] = weight1;
            validWeightArray[0] = 1.0;
        }

        if (weight2 > 0 && validGradeArray[1] > 0) {
            weightArray[1] = weight2;
            validWeightArray[1] = 1.0;
        }

        if (weight3 > 0 && validGradeArray[2] > 0) {
            weightArray[2] = weight3;
            validWeightArray[2] = 1.0;
        }

        if (weight4 > 0 && validGradeArray[3] > 0) {
            weightArray[3] = weight4;
            validWeightArray[3] = 1.0;
        }

        // Set total weight of all activities
        for (var i = 0; i < weightArray.length; i++) {
            if (weightArray[i] > 0.0) {
                totalWeight += weightArray[i];
            }
        }
        // Set individual weights as a percentage
        for (var i = 0; i < weightArray.length; i++) {
            if (validWeightArray[i] > 0.0) {
                finalWeightArray[i] = weightArray[i] / totalWeight;
            }
        }
    }
    // If mean is picked
    else {
        // If not weighted, then assigned weights based on number of valid grades
        for (var i = 0; i < validGradeArray.length; i++) {
            if (validGradeArray[i] > 0.0) {
                meanDivisior += validGradeArray[i];
            }
        }

        // Set individual weights as a percentage
        for (var i = 0; i < validGradeArray.length; i++) {
            if (validGradeArray[i] > 0.0) {
                finalWeightArray[i] = validGradeArray[i] / meanDivisior;
            } else {
                finalWeightArray[i] = 0.0
            }
        }
    }

    // Calculate Result
    for (var i = 0; i < gradesArray.length; i++) {
        result += gradesArray[i] * finalWeightArray[i];
    }
    return result;
}

//Function to convert into percentage format
function convertToPercent(num) {
    var pct = (num*100).toFixed(2) + "%";
    return pct;
}

// Function to calculate percentage of activity 1
function percentage1() {
    checkInputA1();
    if (inputDen1 > 0 && inputNum1 > 0) {
        grade1 = inputNum1 / inputDen1 ;
    } else {
        grade1 = 0;
    }
    return convertToPercent(grade1);
}

// Function to calculate percentage of activity 2
function percentage2() {
    checkInputA2();
    if (inputDen2 > 0 && inputNum2 > 0) {
        grade2 = inputNum2 / inputDen2 ;
    } else {
        grade2 = 0;
    }
    return convertToPercent(grade2);
}

// Function to calculate percentage of activity 3
function percentage3() {
    checkInputA3();
    if (inputDen3 > 0 && inputNum3 > 0) {
        grade3 = inputNum3 / inputDen4;
    } else {
        grade3 = 0;
    }
    return convertToPercent(grade3);
}

// Function to calculate percentage of activity 4
function percentage4() {
    checkInputA4();
    if (inputDen4 > 0 && inputNum4 > 0) {
        grade4 = inputNum4 / inputDen4;
    } else {
        grade4 = 0;
    }
    return converToPercent(grade4);
}

// If weighted button is clicked then perform calculation
document.querySelector("#weightButton").addEventListener("click", function() {
    resetToZero();
    document.querySelector("#finalResult").innerHTML = convertToPercent(calculate(true));
});

// If mean button is clicked then perform calculation
document.querySelector("#meanButton").addEventListener("click", function() {
    resetToZero();
    document.querySelector("#finalResult").innerHTML = convertToPercent(calculate(false));
});

// Calculates Percentages based on Entered Data

// Grade 1 Numerator Event Capture
document.querySelector("#numeratorValue1").addEventListener("keyup", function() {
    resetToZero();
    document.querySelector("#percent1").innerHTML = percentage1();
});

// Grade 1 Denominator Event Capture
document.querySelector("#denominatorValue1").addEventListener("keyup", function() {
    resetToZero();
    document.querySelector("#percent1").innerHTML = percentage1();
});

// Grade 2 Numerator Event Capture
document.querySelector("#numeratorValue2").addEventListener("keyup", function() {
    resetToZero();
    document.querySelector("#percent2").innerHTML = percentage2();
});

// Grade 2 Denominator Event Capture
document.querySelector("#denominatorValue2").addEventListener("keyup", function() {
    resetToZero();
    document.querySelector("#percent2").innerHTML = percentage2();
});

// Grade 3 Numerator Event Capture
document.querySelector("#numeratorValue3").addEventListener("keyup", function() {
    resetToZero();
    document.querySelector("#percent3").innerHTML = percentage3();
});

// Grade 3 Denominator Event Capture
document.querySelector("#denominatorValue3").addEventListener("keyup", function() {
    resetToZero();
    document.querySelector("#percent3").innerHTML = percentage3();
});

// Grade 4 Numerator Event Capture
document.querySelector("#numeratorValue4").addEventListener("keyup", function() {
    resetToZero();
    document.querySelector("#percent4").innerHTML = percentage4();
});

// Grade 4 Denominator Event Capture
document.querySelector("#denominatorValue4").addEventListener("keyup", function() {
    resetToZero();
    document.querySelector("#percent4").innerHTML = percentage4();
});
