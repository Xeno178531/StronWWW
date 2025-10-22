const form = document.getElementById('Account');
const UserInput = document.getElementById('UserNameInput');
const EmailInput = document.getElementById('EmailInput');
const PasswordInput = document.getElementById('PasswordInput');
const RepeatPasswordInput = document.getElementById('RepeatPasswordInput');
const ErrorMessage = document.getElementById('ErrorMessage')

form.addEventListener('submit', (e) => {
    // e.preventDefault()
    let errors = [];

    if(UserInput){
        errors = getSignupFormErrors(UserInput.value, EmailInput.value, PasswordInput.value, RepeatPasswordInput.value);
    } 
    else {
        errors = getLoginFormErrors(EmailInput.value, PasswordInput.value);
    }

    if(errors.length > 0){
        e.preventDefault()
        ErrorMessage.innerText = errors.join(". ")
    }
})

function getSignupFormErrors(user, email, password, repeatpassword){
    let errors = [];

    if(user === '' || user == null){
        errors.push('Nazwa użytkownika jest wymagana')
        UserInput.parentElement.classList.add('Incorrect')
    }
    if(email === '' || email == null){
        errors.push('Adres Email jest wymagany')
        EmailInput.parentElement.classList.add('Incorrect')
    }
    if(password === '' || password == null){
        errors.push('Hasło jest wymagane')
        PasswordInput.parentElement.classList.add('Incorrect')
    }
    if(password !== repeatpassword){
        errors.push('Hasła nie są takie same')
    }

    return errors;
}

function getLoginFormErrors(email, password){
    let errors = []

    if(email === '' || email == null){
        errors.push('Adres Email jest wymagany')
        EmailInput.parentElement.classList.add('Incorrect')
    }
    if(password === '' || password == null){
        errors.push('Hasło jest wymagane')
        PasswordInput.parentElement.classList.add('Incorrect')
    }

    return errors;
}

const AllInputs = [UserInput, EmailInput, PasswordInput, RepeatPasswordInput].filter(input => input != null)

AllInputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('Incorrect')){
            input.parentElement.classList.remove('Incorrect')
            ErrorMessage.innerText = ''
        }
    })
})