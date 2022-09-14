process.stdout.write('\033c');

// TODO:'01 Sum two numbers.js'
// TODO:'02 Comparison operators, strict equality.js'
// TODO:'03 Get type of value.js'
// TODO:'04 Get nth character of string.js'
// TODO:'05 Remove first n characters of string.js'
// TODO:'06 Get last n characters of string.js'
// TODO:'07 Get first n characters of string.js'
// TODO:'08 Extract first half of string.js'
// TODO:'09 Remove last n characters of string.js'
// TODO:'10 Return the percentage of a number.js'
// TODO:'11 Basic JavaScript math operators.js'
// TODO:'12 Check if a number is even.js'
function logger(message ="") {
    console.log('\n Bài số:' + message);
}


//? '04 Get nth character of string.js'
logger(4)
function getnthCharacter(a = '', n) {
    return a[n-1];
    //a.charAt(n-1);
    // Cách 2: a[n-1]; => Với string
}
console.log(getnthCharacter('abc', 2));

//?'05 Remove first n characters of string.js'
logger(5);
function removeFirst(a = ''){
    return a.substring(3);
    // Cách 2 a.slice(3);
}

//? '06 Get last n characters of string.js'
logger(6);
function getLastnCharacter(str = "") {
    //return str.substring(str.length - 3);
    return str.slice(-3);
}
console.log(getLastnCharacter('adsvasdsf'));

//? '07 Get first n characters of string.js'
logger(7);
function getFirstnCharacter(str = ''){
    return str.slice(0, -3);
}

console.log(getFirstnCharacter('abc1231kasd'));

//TODO: '13 How many times does a character occur.js'
//TODO: '14 Check if a number is a whole number.js'
//TODO: '15 Multiplication, division, and comparison operators.js'
//TODO: '16 Check whether a string contains another string and concatenate.js'
//TODO: '17 Round a number to 2 decimal places.js'

//? '13 How many times does a character occur.js'
logger(13);

function todo13(a= '', b= '') {
    const count = b.split(a).length - 1
    console.log(b.split(a));
    return count
}

console.log(todo13('1', '1 2 3 4 5 2 3 1 1 8 9'));
console.log(todo13('2', '1 2 3 4 5 2 3 1 1 8 9'));
console.log(todo13('3', '1 2 3 4 5 2 3 1 1 8 9'));


//TODO: '18 Split a number into its digits.js'
//TODO: '19 Clear up the chaos behind these strings.js'
//TODO: '20 Return the next higher prime number.js'

//? '18 Split a number into its digits.js'
logger(18)
function main18(a= 0) {
    return a.toString().split('').map(n => Number(n));
}

console.log(main18(10));

//? '19 Clear up the chaos behind these strings.js'
logger(19);
function main19(a= '', b= '') {
    //? Đảo ngược
    //? Join nối string
    //? Concat nối mảng
    b = b.split('').reverse().join('');
    a = (a + b).replace('%', '');
    a = a[0].toUpperCase() + a.slice(1);
    return a;
}

console.log(main19('java', 'tpi%rcs'));
//Expect: Javascript
console.log(main19('c%ountry', 'edis'));
//Expect: Country Side
console.log(main19('down', 'nw%ot'));
//Expect Downtown

//? '20 Return the next higher prime number.js'
function isPrime(a) {
    for(let i = 2; i < a; i++) {
        if(a % i == 0) 
            return false
    }
    return true;
}

function main20(a) {
    if(isPrime(a))
        return a;
    while(!isPrime(a)){
        a++;
    }
    return a;
}

function testmain20(a){
    let flag = true;
    for(let i = 2; i < a; i++) {
        if(a % i == 0){
            flag = false
        }
    }

    if(flag)
        return a;
    while(!flag) {
        a++;
    }
    return a;
}

console.log(main20(38)); //41
console.log(main20(7)); // 7
console.log(main20(115)); //127
console.log(main20(2003)); // 2003

//TODO: '21 Find next higher natural number that is divisble by y.js'
//TODO: '22 Insert character after every n characters (backwards).js'
//TODO: '23 Find the correct word by incrementing letters in alphabet.js'

//? '21 Find next higher natural number that is divisble by y.js'
logger(21)
function main21(x, y) {
    if(x % y == 0) {
        return x;
    }
    const k = Math.floor(  x / y ) + 1;
    return k * y
}

//? Cách 2:
function main021(x, y){
    while(x % y !== 0 ) x++;
    return x;
}
console.log(main21(1, 23)) //*23
console.log(main21(23, 23)) // 23
console.log(main21(7, 3)) //9


//? '22 Insert character after every n characters (backwards).js'
logger(22)
function main22(a='', b=''){
    let index = -3;
    while(Math.abs(index) <= a.length){
        a = a.slice(0, index) + b + a.slice(index);
        console.log(a, index)
        index -= 4;
    }
    return a
}

console.log(main22('1234567', '.'));
console.log(main22('abcde', '$'));
console.log(main22('zxyzxyzxyzxyzxyz', '@'));

//? '23 Find the correct word by incrementing letters in alphabet.js'
logger(23)
function main23(str=''){
    const splitString =  str.split('').map((e) => {
        let convertToASCII = e.charCodeAt(0) + 1;
        console.log('Pre: ' + e.charCodeAt() + ': ' + String.fromCharCode(e.charCodeAt(0)))
        console.log('then: ' + convertToASCII + ': ' + String.fromCharCode(convertToASCII));
        console.log();
        let convertToCharacters = String.fromCharCode(convertToASCII);
        return convertToCharacters;
    })

    return splitString.join('');

}

console.log(main23('bnchmf')); //coding
console.log(main23('bgddrd')); // cheese
console.log(main23('sdrshmf')); // testing */

//! PART 2 ARRAY