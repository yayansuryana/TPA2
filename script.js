// BMI = [ Weight(in kg) / (Height(in cm) * Height(in cm)) ] * 10000
// SI unit of BMI is kg/m^2.

document.getElementById("calculate").addEventListener("click", bmiCalculate);	

function bmiCalculate()
{
    var cm = parseFloat(document.getElementById("cm").value);
    var kg = parseFloat(document.getElementById("kg").value);
    var bmi;
    bmi = [kg / (cm * cm)] * 10000;
    bmi = bmi.toFixed(1);
    document.getElementById("result").innerHTML = bmi + " kg/m^2";
    console.log(bmi);	
}