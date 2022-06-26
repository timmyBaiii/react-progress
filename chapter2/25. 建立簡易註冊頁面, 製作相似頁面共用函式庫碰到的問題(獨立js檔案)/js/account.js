var signIn = {
    isEmailFormatCorrect: false,
    isPasswordFormatCorrect: false,
    init: function() {
        var emailInput = document.querySelector('#user_email')
        var passwordInput = document.querySelector('#user_password')

        emailInput.addEventListener('input', (e) => {
            signIn.isEmailFormatCorrect = true;
            canSubmit();
        })
        
        passwordInput.addEventListener('input', (e) => {
            var value = e.target.value;
            var password_warning = document.querySelector('#password_warning');
            if (value.length >= 6) {
                password_warning.innerText = '';
                signIn.isPasswordFormatCorrect = true
            }
            else {
                password_warning.innerText = 'password format not correct';
                signIn.isPasswordFormatCorrect = false
            }

            canSubmit();
        })

        function canSubmit() {
            var submit = document.querySelector('#submit');
            if (isEmailFormatCorrect && isPasswordFormatCorrect) {
                submit.disabled = false;
            }
            else {
                submit.disabled = true;
            }
        }
    }
}