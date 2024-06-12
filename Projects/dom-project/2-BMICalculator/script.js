const form = document.querySelector('form');

// outside height and weight variables will
// result in NaN when used inside the event listener

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const weight = parseFloat(form.querySelector('#weight').value);
    const height = parseFloat(form.querySelector('#height').value);
    const result = document.querySelector('#results');

    if(isNaN(height) || height <= 0){
        result.innerHTML = `<h6>Please enter a valid height ${height}</h6>`;
    }
    else if(isNaN(weight) || weight <= 0){
        result.innerHTML = `<h6>Please enter a valid weight ${weight}</h6>`;
    }
    else{
        const bmi = (weight / ((height ** 2) / 10000)) ;
        result.innerHTML = `<h4>Your BMI is ${bmi.toFixed(2)}</h4>
                            <h6>${bmi < 18.5 ? "Underweight" : bmi < 24.9 ? "Normal" : bmi < 29.9 ? "Overweight" : "Obese"}</h6>`;
    }



});