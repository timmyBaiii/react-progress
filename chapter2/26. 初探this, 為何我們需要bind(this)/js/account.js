var account = {
    isEmailFormatCorrect: false,
    isPasswordFormatCorrect: false,
    init: function() {
        var emailInput = document.querySelector('#user_email')
        var passwordInput = document.querySelector('#user_password')

        emailInput.addEventListener('input', function(e) {
            this.isEmailFormatCorrect = true;
            this.canSubmit();
        }.bind(this));
        
        passwordInput.addEventListener('input', function(e) {
            var value = e.target.value;
            var password_warning = document.querySelector('#password_warning');
            if (value.length >= 6) {
                password_warning.innerText = '';
                this.isPasswordFormatCorrect = true
            }
            else {
                password_warning.innerText = 'password format not correct';
                this.isPasswordFormatCorrect = false
            }

            this.canSubmit();
        }.bind(this))


    },
    canSubmit: function() {
        var submit = document.querySelector('#submit');
        if (this.isEmailFormatCorrect && this.isPasswordFormatCorrect) {
            submit.disabled = false;
        }
        else {
            submit.disabled = true;
        }
    }
}