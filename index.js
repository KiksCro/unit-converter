let btnConvertor = document.getElementById("btn-convert");
let inputEl = document.getElementById("input");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");
// unit conversions
const meterTofeet = 3.281;
const literTogallon = 0.264;
const kiloTopound = 2.204;

btnConvertor.addEventListener("click", function(){
    let baseValue = parseFloat(inputEl.value);

   // length calcualtion -- divide for metric, multiply for imperial 
    let lengthMetric = (baseValue / meterTofeet).toFixed(3);
    let lengthImperial = (baseValue * meterTofeet).toFixed(3);
    lengthEl.textContent = `${baseValue} meter = ${lengthImperial} feet | ${baseValue} feet = ${lengthMetric} meters `;
    // volume calculation -- divide for metric, multiply for ipmerial
    let volumeMetric = (baseValue / literTogallon).toFixed(3);
    let volumeImperial = (baseValue * literTogallon).toFixed(3);
    volumeEl.textContent = `${baseValue} liters = ${volumeImperial} gallons | ${baseValue} gallons = ${volumeMetric} liters `;
    // mass calculation -- divide for metric, multiply for imperial
    let massMetric = (baseValue / kiloTopound).toFixed(3);
    let massImperial = (baseValue * kiloTopound).toFixed(3);
    massEl.textContent = `${baseValue} kilos = ${massImperial} pounds | ${baseValue} pounds = ${massMetric} kilos `;
    
    }
    
)
