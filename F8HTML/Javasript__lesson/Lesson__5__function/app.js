// FUNCTION

function showAlert(message, b, c) {
    if(message != 0) {
        return message;
    } else {
        return `${message} + Ui da + ${message}`;
    }
}

let check = showAlert(0);
console.log(check);


//built in
function myFuntion(){
    return arguments
}

console.log(myFuntion(5, 6, 7));


const x = (x, y) => x * y;
console.log(x(5, 5));