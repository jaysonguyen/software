process.stdout.write('\033c');
console.log('Hello World');
console.log('ThanhNguyen');

//? ============ special value
const INF = 1/0;
console.log(INF);

const input = '10c';
const x = Number(input);
console.log(x + ': ' + typeof x);
console.log('isNaN(x): ' + isNaN(x)); 
console.log("Number.isNaN(x): " + Number.isNaN(x)); 

console.log('\n' + input + ': ' + typeof input);
console.log('isNaN(x): ' + isNaN(input));//! return true
console.log('Number.isNaN(x): ' + Number.isNaN(input));//! return false
 
//? Why it return when "10c" is NaN
//* isNaN work when converted to Number
//* Number.isNaN works when converted to Number

//* Some helper Functions:
/*
    Number.parseInt;
    Number.parseFloat;
    Number.isNaN;
    Number.isSafeInteger;
    myNumber.toFixed(2);

    Math.max;
    Math.PI;
    Math.sprt;
    Math.pow;
    Math.sin;
*/