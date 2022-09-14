const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function Validator(options) {

    function getParent(element, selector) {
        while(element.parentElement) {
            if(element.parentElement.matches(selector)) {
                return element.parentElement;
            } 
            element = element.parentElement;
        }
    }

    const selectorRules = {};

    function validate(inputElement, rule) {
        var ErrorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage;
        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];

        // Lặp qua từng rules(check)

        for (let i = 0; i < rules.length; i++) {
            switch(inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if (errorMessage) break;
        }

        if (errorMessage) {
            ErrorElement.innerHTML = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        } else {
            ErrorElement.innerHTML = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }

        return !errorMessage;
    }

    const formElement = $(options.form);
    if (formElement) {

        formElement.onsubmit = (e) => {
            e.preventDefault();

            var isFormValid = true;

            options.rules.forEach((rule) => {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {

                // Trường hợp submit với javascript
                if(typeof options.onSubmit === 'function') {
                    let eableInput = formElement.querySelectorAll('[name]:not([disable])')
                    var formValues = Array.from(eableInput).reduce((values, input) => {
                        switch(input.type){
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;
                            case 'checkbox':
                                if(!input.matches(':checked')) return values;

                                if(!Array.isArray(values[input.name])) {
                                values[input.name] = [];
                                }
                                values[input.name].push(input.value); 
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }
                        return values;
                    }, {});
                    options.onSubmit(formValues);
                    // Trường hợp submit với hành vi mặc định
                } else {
                    formElement.submit();
                }
            }


        }
        // Lặp qua mỗi rule và xử lý
        options.rules.forEach((rule) => {
            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }


            var inputElements = formElement.querySelectorAll(rule.selector);
            Array.from(inputElements).forEach((inputElement) => {
                inputElement.onblur = () => {
                    validate(inputElement, rule);
                }
                // Xử lý khi input
                inputElement.oninput = () => {
                    var ErrorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    ErrorElement.innerHTML = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }

            })

        });
    }
}



// Nguyên tắc của các rule
// 1. Khi có lỗi thì trả message lỗi
// 2. Khi hợp lệ thì trả ra undefine
Validator.isRequired = function (selector, message) {
    return {
        selector,
        test(value) {
            return value ? undefined : message || 'Vui lòng nhập trường này';
        }
    };
}

Validator.isEmail = function (selector, message) {
    return {
        selector,
        test(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là Email';
        }
    };
}

Validator.minLength = function (selector, min, message) {
    return {
        selector,
        test(value) {
            return value.length >= min ? undefined : message || 'Mật khẩu phải bao gồm 8 kí tự';
        }
    };
}


Validator.isConfirmed = function (selector, getConfirm, message) {
    return {
        selector,
        test(value) {
            return value == getConfirm() ? undefined : message || 'Giá trị không đúng';
        }
    };
}



