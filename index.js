const display = document.getElementById("display");


let expression ="";

// Press Value

function press(value){
    expression += value
    document.getElementById("display").value = expression;
}

// Calculate

function calculate(){
    try{
        const result= math.evaluate(expression);
        document.getElementById("display").value = result;
        expression = result.toString();
    } catch (err){
        document.getElementById("display").value = "Error";
        expression = "";
    }
}

// Clear Display

function clearDisplay(){
    expression = expression.slice(0, -1);
    document.getElementById("display").value = expression;
}