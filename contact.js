const form = document.querySelector('form');
const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const textArea = document.getElementById('textArea');


function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'formControl error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'formControl success';
}


//prevent the submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (fName.value == '') {
        showError(fName, ' Name is Required ');
    } else {
        showSuccess(fName);
    }
    if (lName.value == '') {
        showError(lName, ' Last Name is Required ');
    } else {
        showSuccess(lName);
    }
    if (email.value == '') {
        showError(email, ' Email is Required ');
    } else {
        showSuccess(email);
    }
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        showError(email, ' Not a proper Email. Try again ');
    } else {
        showSuccess(email);
    }
    if (phone.value < 0) {
        showError(phone, ' Enter Phone number or leave blank ');
    } else {
        showSuccess(phone);
    }
    if (textArea.value == '') {
        showError(textArea, ' Please Enter Message ');
    } else {
        showSuccess(textArea);
    }
})