// 1. Arrow Function
//Method 1:
let logger = (log) => {
    console.log('Log sau khi nhập là: ', log);
}
logger('Nguyên');

// Method 2:
const addNumber = (a, b) => a + b;
console.log(addNumber(5, 6));

// Case: Object
let object =  (a, b) => ({
    a: 'Nguyen',
    b: Thanh,
})

// Arrow Function does not have its context
let object1 = {
    name: 'Nguyen',
    age: 18,
    getName: () => {
        return this.name;
    }
    
}
console.log(object1.getName()); // Khong the tra ve 'Nguyen' neu la arrow funtion;

// Cannot use as a function constructors

// 2. Enhanced object literal
// 2.1 Default keys: value cho object with shorter way
// 2.2 Default function for object
// 2.3 Default keys for object with variable form;

var name = 'Javascript';
var price = 1000;

// Normal way
var course = {
    name: name,
    price: price
};
console.log(course);

// Enhanced 
var course = {
    name,
    price,
    getName() {
        return this.name;
    }
};

var fieldName = 'name';
var fieldPrice = 'Price';

const course2 = {
    name: 'Javascript',
    [fieldName]: 'Javascript',
    [fieldPrice]: 90000
};

console.log(course2);