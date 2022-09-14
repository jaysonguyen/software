const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function Validator(formSelector, options = {}) {

    function getParent(element, selector) {
        while(element.parentElement) {
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    const formRules = {}; 


    // Quy ước tạo rules
    //  Nếu có lỗi thì return `error message`
    // Nếu không có lỗi thì return `undefined`
    const validatorRules = {
        required: (value) => value ? undefined : 'Vui lòng nhập trường này',
        email: (value) => {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập email'
        },
        min: (minNumber) => {
            return (value) => {
                return value.length >= minNumber ? undefined : `Mật khẩu phải đủ ${minNumber} khí tự`;
            }
        },
    }

    // lấy ra form Element trong DOM theo `formSelector`
    const formElement = $(formSelector);

    if (formElement) {
        const inputs = formElement.querySelectorAll('[name], [rules]');
        for (var input of inputs) {
            var rules = input.getAttribute('rules').split('|');
            for(var rule of rules) {
                var isRuleHasValue = rule.includes(':');
                var ruleInfor;

                if(isRuleHasValue) {
                    ruleInfor = rule.split(':');
                    rule = ruleInfor[0];
                }
                
                var ruleFunc = validatorRules[rule];

                if(isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfor[1]);
                }
                
                if(Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                } else {
                    formRules[input.name] = [ruleFunc];
                }
            }
            
            // Lắng nghe sự kiện để validate
            input.onblur = handleValidate;
            input.oninput = handleFunctionClear;
        }

        function handleValidate(e) {
            var rules = formRules[e.target.name];
            var errorMessage; 
            rules.find(rule => {
                errorMessage = rule(e.target.value);
                return errorMessage;
            });
            
            // Nếu có lỗi hiển thị message lỗi
            if(errorMessage) {
               let formGroup = getParent(e.target, '.form-group');
               if(formGroup) {
                   formGroup.classList.add('invalid');
                   var formMessage = formGroup.querySelector('.form-message');
                   if(formMessage) {
                       formMessage.innerHTML = errorMessage;
                   }
               }
                
            }
            return !errorMessage;
        }
        

        function handleFunctionClear(e) {
            let formGroup = getParent(e.target, '.form-group');
            if(formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid');
                var formMessage = formGroup.querySelector('.form-message');

                if(formMessage) {
                    formMessage.innerHTML = '';
                }
            }
        }
    }


    // Xử lý hành vi submit form
    formElement.onsubmit = function(e) {
        e.preventDefault();
        const inputs = formElement.querySelectorAll('[name], [rules]');
        var isValid = true;
        for (var input of inputs) {
           if(!handleValidate({target: input})) {
               isValid = false;
           }
        }

        // Khi không có lỗi thì submitform
        if(isValid) {
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
}
