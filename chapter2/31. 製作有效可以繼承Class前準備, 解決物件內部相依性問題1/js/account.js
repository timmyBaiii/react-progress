var account = {
    keyValueState: {},
    isStringEmail(str) {
        return true;
    },
    isStringPasswordFormat(str) {
        return str.length >= 6;
    },
    initEmailInputField(selectors, validateFunc, syncFunc) {
        var emailInput = document.querySelector(selectors);
        var isEmailFormatCorrect = false;
        emailInput.addEventListener('input', function(e) {
            isEmailFormatCorrect = validateFunc(e.target.value);
            syncFunc({"isEmailFormatCorrect": isEmailFormatCorrect});
        });
    },
    initPasswordInputField(selectors, validateFunc, syncFunc) {
        var passwordInput = document.querySelector(selectors);
        var isPasswordFormatCorrect = false;
        passwordInput.addEventListener('input', function(e) {
            var thisInput = e.target;
            var password_warning = thisInput.parentElement.querySelector('.warning-string');
            if (validateFunc(thisInput.value)) {
                password_warning.innerText = '';
                isPasswordFormatCorrect = true
            }
            else {
                password_warning.innerText = 'password format not correct';
                isPasswordFormatCorrect = false
            }

            syncFunc({"isPasswordFormatCorrect": isPasswordFormatCorrect});
        });
    },
    init: function() {
        this.keyValueState = {
            "isEmailFormatCorrect": false,
            "isPasswordFormatCorrect": false,
        }
        this.initEmailInputField('#user_email', this.isStringEmail, function(value) {
            this.canSubmit(value);
        }.bind(this));

        this.initPasswordInputField('#user_password', this.isStringPasswordFormat, function(value) {
            this.canSubmit(value)
        }.bind(this));
    },
    canSubmit: function(keyValueObject) {
        if (undefined !== keyValueObject["isPasswordFormatCorrect"]) {
            this.keyValueState['isPasswordFormatCorrect'] = keyValueObject["isPasswordFormatCorrect"];
        }

        if (undefined !== keyValueObject["isEmailFormatCorrect"]) {
            this.keyValueState['isEmailFormatCorrect'] = keyValueObject["isEmailFormatCorrect"];
        }

        var submit = document.querySelector('#submit');
        if (this.keyValueState['isPasswordFormatCorrect'] && this.keyValueState['isEmailFormatCorrect']) {
            submit.disabled = false;
        }
        else {
            submit.disabled = true;
        }
    }
}