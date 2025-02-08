var form = document.getElementById('form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateInputs();
});

function validateInputs() {
    var usernameval = username.value.trim();
    var emailval = email.value.trim();
    var passwordval = password.value.trim();

    if (usernameval === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (emailval === '') {
        setError(email, 'Email is required');
    } else if (!validateEmail(emailval)) {
        setError(email, 'Please enter a valid email');
    } else {
        setSuccess(email);
    }

    if (passwordval === '') {
        setError(password, 'Password is required');
    } else if (passwordval.length < 8) {
        setError(password, 'Password must be at least 8 characters long');
    } else {
        setSuccess(password);
    }
}

function setError(element, message) {
    var inputGroup = element.parentElement;
    var errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    var inputGroup = element.parentElement;
    var errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

var validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
};
