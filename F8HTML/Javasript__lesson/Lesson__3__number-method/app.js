/* Có nhiều kiểu khai báo */
var milion = 1e6; //Một triệu
var billion = 2e9 // 2 tỏi;
console.log(milion);
console.log(billion);

var billion2 = 2.234e9 // 2 tỉ 2 trăm 3 4 trịu  2.234.000.000ư

console.log('*************************************');
/* Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả vè boolean */
var Number1 = Number.isFinite(2 / 0 ); //false;
console.log(Number1);
var Number1 = Number.isFinite(20 / 5 ); //True;
console.log(Number1);
var Number1 = Number.isFinite(0 / 0); //True;
console.log(Number1);



console.log('*************************************');
/* Xấc định xem giá trị đã cho có phải là số nguyên hay không. Trả về kieur boolean */
var Number2 = Number.isInteger(9999999); //true;
console.log(Number2);
var Number2 = Number.isInteger(0.2); //true;
console.log(Number1);
var Number2 = Number.isInteger(Math.PI); //true;
console.log(Number1);



console.log('*************************************');
/* Chuyển đổi chuỗi đã cho thành một số dấu phẩy động */
var Number3 = Number.parseFloat('10');
console.log(Number3);
var Number3 = Number.parseFloat('10.00');
console.log(Number3);
var Number3 = Number.parseFloat('238,21');
console.log(Number3);
var Number3 = Number.parseFloat('237.22');
console.log(Number3);
var Number3 = Number.parseFloat('34 56 78');
console.log(Number3);
var Number3 = Number.parseFloat(' 37 ');
console.log(Number3);
var Number3 = Number.parseFloat('19 is my age');
console.log(Number3);



console.log('*************************************');
/* Chuyển đỗi chuoix đã cho thành số nguyên */
var Number4 = Number.parseInt('10');
console.log(Number4);
var Number4 = Number.parseInt('10.00');
console.log(Number4);
var Number4 = Number.parseInt('238,21');
console.log(Number4);
var Number4 = Number.parseInt('237.22');
console.log(Number4);
var Number4 = Number.parseInt('34 56 78');
console.log(Number4);
var Number4 = Number.parseInt(' 37 ');
console.log(Number4);
var Number4 = Number.parseInt('18 is my age');
console.log(Number4);


console.log('*************************************');
console.log('Fixed');
/* Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số
chính xác sau dáu thập phân */
var numberObject = 1234.56789;
console.log(numberObject.toFixed());
console.log(numberObject.toFixed(1)); //1234.6
console.log(numberObject.toFixed(6)); //1234.67890


console.log('*************************************');
console.log('Exponential');
/*Return  a string, with a number rounded and written using exponential notation */
let numberObject2 = 9.656;
console.log(numberObject2.toExponential());
console.log(numberObject2.toExponential(2));
console.log(numberObject2.toExponential(4));
console.log(numberObject2.toExponential(6));

/* Return a string , with a number written with a specified length*/
let numberx = 9.656;
console.log(numberx.toPrecision()); // 9.656
console.log(numberx.toPrecision(2)); // 9.7
console.log(numberx.toPrecision(4)); // 9.656
console.log(numberx.toPrecision(6)); // 9.65600
/* Lam` tron` tren */

console.log('************************************************')
console.log('Chuyen doi dang da cho thanh dang chuoi to String');
/* Chuyển đổi số đã cho thanhd dạng chuỗi */
console.log(typeof (11).toString())
console.log(typeof (18).toString());
console.log(typeof (17.3).toString());



console.log('*************************************');
/* Kiểu số trong js */
// Các cách tạo
// Kiểm tra datatype;
var age = 18;
var PI = 3.14;
/* NaN đại diện cho một số không hợp lệ*/
/* Kiểm tra biến NaN */
var result = 20 / 'ABC';
console.log(isNaN(result));

/* Returns a number as a number */
console.log('*************************************');
console.log('valueOf');
let x = 123;
console.log(x.valueOf());
console.log((123).valueOf());
console.log((100 + 23).valueOf());

/* Converting Variables to Numbers */
// Number()  = Returns a number, converted from its argument
// parseInt() = Parses its argument and returns a floating point number
// parseFloat() = Parses its argument and returens an integer
console.log('*************************************');
console.log('Number()');
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("10")); // 10
console.log(Number("10 ")); // 10
console.log(Number("  10")); // 10
console.log(Number("10.33")); // 10.33
console.log(Number(" 10,33")); // NaN
console.log(Number(" 10 33")); // NaN
console.log(Number(" John")); // NaN

/* Converting dates to a number */
let date = new Date("2021-01-03");
console.log(Number(date));

console.log('*************************************');
console.log('parseInt() - Only the first number is returned ');
console.log(parseInt("-10")); // -10;
console.log(parseInt("-10.33")); // -10;
console.log(parseInt("10")); // 10;
console.log(parseInt("10 20 30")); // -10;
console.log(parseInt("10 years")); // 10;
console.log(parseInt("years 10")); // NaN;

console.log('*************************************');
console.log('parseFloat() - Only the first number is returned ');
console.log(parseInt("10")); // 10;
console.log(parseInt("-10.33")); // -10.33;
console.log(parseInt("10 20 30")); // 10;
console.log(parseInt("10 years")); // 10

/* Number Properties */
// MAX_VALUE == return the larges number positive in javasript
// MIN_VALUE ==return the smallest number positive in javasript
// POSITIVE_INFINITY == Represent infinity (retrun on overflow)
// NEGATIVE_INFINITY == Represent infinity (retrun on overflow)
// NaN == == Represent a "Not a Number" value

let y = Number.MAX_VALUE;
console.log('max value: ' + y);

let z = Number.MIN_VALUE;
console.log('min value: ' + z);

let num6 = Number.POSITIVE_INFINITY;
console.log('Positive Infinity: ' + num6);

let num7 = Number.NEGATIVE_INFINITY;
console.log('Negative Infinity: ' + num7);





