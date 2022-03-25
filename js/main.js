function validateEmail() {
    let value = emailInput.value;

    if (!value) {
        showErrorMessage(emailInput, 'Email is a required field.');
        return false;
    }

    if (value.indexOf('@')=== -1) {
        showErrorMessage(emailInput, 'You must enter a valid email address.');
        return false 
    }

    showErrorMessage(emailInput, null);
    return true;
}

function showErrorMessage(input, message) {
    let container = input.parentElement;

    //Remove an existing error
    let error = container.querySelector('.error-message');
    if (error) {
        container.removeChild(error);
        
    }

    //Add the error if the message isn't empty
    if (message) {
        let error= document.createElement('div');
        error.classList.add('error-message');
        error.innerText=message;
        container.appendChild(error);
        
    }
    
}

emailInput.addEventListener('input', validateEmail);