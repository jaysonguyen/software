process.stdout.write('\033c');

//? Có thể coi Funtion như một variable
//? Có thể reassign nó với một giá trị khác
//? Có thể sử dụng như một parameter
//? Có thể declare nó như một variable
//? Nested Function 
function f() {
    function nestedFunction() {
        console.log('this is nestedFunction');
    }
    nestedFunction();
}

f();

//! Nếu không truyền 1 giá trị cho 1 parameter thì nó sẽ nhận một giá trị đặc biệt là undefine
function sum(a, b) {
    console.log('a = '  + a );
    console.log( 'b = ' + b );
}
sum();

//* rest parameter
function sum(...values) {
    let sum = 0;
    for (const value of values) {
        sum += value;
    }
    return sum;
}
console.log(sum(1, 2, 3, 4, 5));

//? Overloading function
//! không có overloading function giống c# nó chỉ được reassgin lại ghi đè lên function đã có trước đó
function f(a) {
    console.log('a = ' + a);
}

function f(a, b) {
    console.log('a = ' + a );
    console.log('b = ' + b );
}

const a = 1;
f(a);