function convertTemperature(){
    var inputTemp = document.getElementById("input").value;
    if (isNaN(inputTemp)){
        alert("Please enter a valid temperture.");
        return;
    }
    
    var fromUnit = document.querySelector('input[name="input Temperature"]:checked').value
    var toUnit = document.querySelector('input[name="output Temperature"]:checked').value

    var result;
    
    if (fromUnit==="Kelvin" && toUnit==="Celsius"){
        result= parseFloat(inputTemp) - 273;
    } else if (fromUnit==="Kelvin" && toUnit==="Fahrenheit"){
        result= (inputTemp-273)*9/5 + 32;
    } else if (fromUnit==="Celsius" && toUnit==="Kelvin"){
        result= parseFloat(inputTemp) +273;
    } else if (fromUnit==="Celsius" && toUnit==="Fahrenheit"){
        result=inputTemp*9/5 + 32;
    } else if (fromUnit==="Fahrenheit" && toUnit==="Celsius"){
        result= (inputTemp-32)*5/9;
    } else if (fromUnit==="Fahrenheit" && toUnit==="Kelvin"){
        result=(inputTemp-32)*5/9 + 273;
    } else {
        result == inputTemp
    }

    document.getElementById("result").value=result.toFixed(3);
}
document.querySelector("button").addEventListener("click",convertTemperature)
