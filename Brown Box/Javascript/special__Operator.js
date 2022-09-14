process.stdout.write('\033c');

//! FALSY
/**
 * *Flase
 * * Empty string
 * * null, undefiend
 * *0
 * * NaN
 */

//* TRUE

//TODO: 1. Double not: !!
/**
 * x = false => !x = true => !!false
 * "" = true => !x = true => !! false
 * null, undefined => !x = true => !!x = false
 * 0 => !x = true => !!x = false
 * NaN => !x = true => !!x = false
 
 * !
 * {}, [], 'false', '0' => !x false => !!x = true
 * "my name" => !x = false => !!x true
 */
//? được sử dụng khi convert a object to boolean

//! Logic AND: &&
console.log(!!(1 && 0 && []));
// return the first falsy operand
// Nếu toản hạng là truthy return the value of the last operand
console.log(1 && '0' && [])

//! Logic or: ||
// return the first truthy operand
// if they are all falsy returns the values of the last operand
console.log('Logic Or')
console.log(0 || 1 || 2);
console.log(0 || NaN || undefined);

//! Muốn kiểm tra xem biến có hợp lệ hay không có truthy?
//Ex

const userInput = 'Hello';
/* if(userInput) {
    name = userInput;
} else {
    name = 'N/A';
} */
const name = userInput || 'N/A';

//! Precidence vừa có && vừa có ||
//? Which operand will be more pioritized(Ưu tiên)
// => Nó sẽ ưu tiên && > ||

//! Nullish: Chỉ tất cả các object có thể bị null or undefined
//! Nullish operator ??
//* const x = condition || default;
//* If condition is false return default

//* const x = condition ?? default;
//* if condition null or undefined returns default.

const k = null;
console.log(k ?? 'N/A');

//! Optional Cahining: ?.
//* Khi access vào một loạt key của một object 
//* EX: obj.address.stresss.number...;
const thao = {
    name: 'Thảo',
    age: 18,
    address: {
        street: 'Trần Duy Hưng'
    },
};

const nguyen = {
    name: 'Cong',
    age: 30,
    sayHi() {
        console.log(this.name + 'Hello to you!');
    }
}

console.log(thao.address.street) //*Chaining 
//! Error: thaosayHi() Không thể truy cập đến thuộc tính mà nó không tồn tại
//! if property is nullish returns undefined otherwise return object.property.name

//* Cách giải quyết
console.log(nguyen.address?.street); // Expected: undefiend
console.log(thao.say?.());
//! ?.: Có phải nullish không nếu phải thì trả ngay lúc đó
//* Safe access
/* console.log(cong.address && cong.address.street); */


//* spread synax: ...
//* cd ...values = value1, value2, value3
//* Rest chỉ sử dụng với array hay vòng lặp
//* Spread: có thể sử dụng cho object trong 1 số case
const arrSpeard = [1, 2, 3];
const arr3 = [...arrSpeard, 5, 6];
console.log(arr3);

//*Spread cho object
//* Muốn tạo một object giống 80* object cũ

const thanh = {
    name: 'Thanh',
    age: 10,
    address: 'Truong Han Sieu',
}

const cuong = {...thanh, name: 'Cuong'};
console.log(thanh)
console.log(cuong)