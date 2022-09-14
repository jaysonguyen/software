process.stdout.write('\033c');

//? Object là collection các property và method
const myobject = {
    name: 'ThanhNguyen',
    age: 10,
    dob: 2010,
    getName() {
        return this.name;
    },
    getAge() {
        return 2021 - this.dob;
    }
};

console.log(myobject.getName());
console.log(myobject.getAge());

//? We can attach a property to a object

const anotherObj = {};
anotherObj.name = 'ThanhNguyen';
console.log(anotherObj)

//! Nếu có new Numer|String|Boolean... => Là constructor function
// VD:

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.getFullname = function() {
        return this.name + 'Hoang';
    };
}

const a = new Person('Jace', 10);
const b = new Person('Jayson', 18);
console.log(a);

b.getOlder = function() {
    this.age++;
}

console.log(b);
console.log(a.getFullname())

//! thêm một proerty vào một constructor mà không muốn thay đổi constructor gốc
//* Sử dụng prototype

Person.prototype.dob = 1990;
Person.prototype.show = function() {
    console.log(this.dob);
}

console.log(a.__proto__);
console.log(b.__proto__);

console.log(a.dob);
