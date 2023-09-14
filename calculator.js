let calculation = JSON.parse(localStorage.getItem('calculateString')) || '';
let result = 0;
let displayCalculationElement = document.querySelector('.js-show-calculation');
displayCalculation();

// Neither the repetition of operators nor consecutive operators should be present.
// Create a function.

function storeCalculation(char) {

  calculation = String(calculation + char);
  console.log(calculation.split(''));
  localStorage.setItem('calculateString', JSON.stringify(calculation));
  displayCalculation();
  // console.log('After store calculation');
}

function doCalculation() {
  result = eval(JSON.parse(localStorage.getItem('calculateString'))) || 'No calculation found. Enter input';
  console.log(result);
  // calculation = result;
  localStorage.setItem('calculateString', JSON.stringify(result));
  displayCalculation();
  // console.log('After do calculation');
}

function displayCalculation() {
  displayCalculationElement.innerHTML = JSON.parse(localStorage.getItem('calculateString')) || 0;
  console.log('Inside display calculation');
}

      // function handleCalcOnkeydown(){

      // }