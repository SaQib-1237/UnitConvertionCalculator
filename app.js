  let celcius;
  let fahrenheit;
  let inputElement = document.querySelector('#cal-input');
  let inputValue = inputElement.value;
  let result = document.querySelector('#cal-display');

  function selectOption() {
     let selectElement = document.querySelector('#cal-select');
     // Fixed Error Number 2 Assign the Value of select in another variable instead of that you Assign manually
     let selectedElement = selectElement.value;
     if (selectedElement === 'celcius') {
       convertCelcius();
     } else {
       convertFahrenheit();
     }
  }

  function convertCelcius() {
    // Fixed Error 1 It's Compulsory to ubdate the Value of Input in function  
    inputValue = inputElement.value;
    fahrenheit = (inputValue * 9/5) +32;
    result.innerText = (`The Celcius is ${inputValue} and The Fahrenheit is ${fahrenheit.toFixed(2)}`);
  }

  function convertFahrenheit() {
     inputValue = inputElement.value;
    celcius = (inputValue - 32) * 5/9;
    result.innerText = (`The FahrenHeight is ${inputValue} and The Celcius is ${celcius.toFixed(2)}`);
  }