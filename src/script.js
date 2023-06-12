const btnCalculate = document.querySelector('.calculate');
// inputs
const inputDay = document.getElementById('day');
const inputMonth = document.getElementById('month');
const inputYear = document.getElementById('year');
// outputs
const resultYear = document.querySelector('.resultYear');
const resultMonth = document.querySelector('.resultMonth');
const resultDay = document.querySelector('.resultDay');

btnCalculate.addEventListener('click', calculate);

const date = new Date();
let currentDay = date.getDate();
let currentMonth = 1 + date.getMonth();
let currentYear = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function dateValidator() {
  const inputs = document.querySelectorAll('.input');
  let validate = true;
  inputs.forEach((input) => {
    const parent = input.parentElement;
    if(!input.value) {
      input.style.border = '.063rem solid var(--light-red)';
      parent.querySelector('.infoError').innerText = 'This field is required';
      parent.querySelector('.nameInput').style.color = 'var(--light-red)';
      validate = false;
    } 
    
    else if (inputDay.value === '0' || inputDay.value > 31) {
      inputDay.style.border = '.063rem solid var(--light-red)';
      inputDay.parentElement.querySelector('.infoError').innerText = 'Must be a valid day';
      inputDay.parentElement.querySelector('.nameInput').style.color = 'var(--light-red)';
      validate = false;
    } 
    
    else if (inputMonth.value > 12) {
      inputMonth.style.border = '.063rem solid var(--light-red)';
      inputMonth.parentElement.querySelector('.infoError').innerText = 'Must be a valid month';
      inputMonth.parentElement.querySelector('.nameInput').style.color = 'var(--light-red)';
      validate = false;
    }

    else if (inputMonth.value === '2' && inputDay.value > 29) {
      inputDay.style.border = '.063rem solid var(--light-red)';
      inputDay.parentElement.querySelector('.infoError').innerText = 'Must be a valid day';
      inputDay.parentElement.querySelector('.nameInput').style.color = 'var(--light-red)';
      validate = false;
    } 

    else if (inputMonth.value === '4' && inputDay.value > 30) {
      inputDay.style.border = '.063rem solid var(--light-red)';
      inputDay.parentElement.querySelector('.infoError').innerText = 'Must be a valid day';
      inputDay.parentElement.querySelector('.nameInput').style.color = 'var(--light-red)';
      validate = false;
    }

    else if (inputMonth.value === '6' && inputDay.value > 30) {
      inputDay.style.border = '.063rem solid var(--light-red)';
      inputDay.parentElement.querySelector('.infoError').innerText = 'Must be a valid day';
      inputDay.parentElement.querySelector('.nameInput').style.color = 'var(--light-red)';
      validate = false;
    }

    else if (inputMonth.value === '9' && inputDay.value > 30) {
      inputDay.style.border = '.063rem solid var(--light-red)';
      inputDay.parentElement.querySelector('.infoError').innerText = 'Must be a valid day';
      inputDay.parentElement.querySelector('.nameInput').style.color = 'var(--light-red)';
      validate = false;
    }
  
    else if (inputMonth.value === '11' && inputDay.value > 30) {
      inputDay.style.border = '.063rem solid var(--light-red)';
      inputDay.parentElement.querySelector('.infoError').innerText = 'Must be a valid day';
      inputDay.parentElement.querySelector('.nameInput').style.color = 'var(--light-red)';
      validate = false;
    }

    else if (inputYear.value > currentYear) {
      inputYear.style.border = '.063rem solid var(--light-red)';
      inputYear.parentElement.querySelector('.infoError').innerText = 'Must be in the past';
      inputYear.parentElement.querySelector('.nameInput').style.color = 'var(--light-red)';
      validate = false;
    } 

    else {
      input.style.border = '.063rem solid var(--off-black)';
      parent.querySelector('.infoError').innerText = '';
      parent.querySelector('.nameInput').style.color = '';
      validate = true;
    }
  });
  return validate;
}

function calculate(ev) {
  ev.preventDefault();
  if (dateValidator()) {
    if(inputDay.value > currentDay) {
      currentDay = currentDay + months[currentMonth - 1];
      currentMonth = currentMonth - 1;
    }

    if(inputMonth.value > currentMonth) {
      currentMonth = currentMonth + 12;
      currentYear = currentYear - 1;
    }

    const day = currentDay - inputDay.value;
    const month = currentMonth - inputMonth.value;
    const year = currentYear - inputYear.value;

    resultDay.innerText = day;
    resultMonth.innerText = month;
    resultYear.innerText = year;
  }
}