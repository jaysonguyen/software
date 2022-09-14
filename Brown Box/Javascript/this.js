//Practice
"use strict"

this.name = "GLOBAL";

function logger(message) {
    console.log("\n");
    console.log("Example: " + message);
}

function normalFunction() {
    console.log("normalfunction:", this?.name);
}

const x = {
    name: "Yuki",
    dob: "05/06/2002",
    method() {
        console.log("method:", this?.name);
    },
    arrowMethod: () => {
        console.log("Arrow mehod: " + this?.name);
    }
}

//!Example 1: switching function => method
logger(1);
x.otherFunction = normalFunction;
x.otherFunction();

//*this is method so it return: "x"

//!Example 2: switching function <= method
logger(2);
const anotherFunction = x.method;
anotherFunction();
//*this is method so it return: "undefined"

//!Example 3: Arrow method
logger(3);
x.arrowMethod();
//*this is method so it return: "GLOBAL"
//? BEST PRACTICE: For method should use regular function

//!Example 4: Arrow method => function
logger(4)
const anotherArrowFuntion = x.arrowMethod;
anotherFunction();
//*this is method so it return: "undefined"

//!Example 5 : Method id attached to another object
logger(5);
const y = {
    name: "y",
};

y.method = x.method;
x.method();
y.method();
//*this is method so it return: "y"

//!Example 6 : nested functions
logger(6);
function globalfunction() {
    const normalFuntion = function () {
        console.log("normalfunction", this?.name);
    }
    const arrowFunction = () => {
        console.log("arrowfunction", this?.name);
    };

    normalFunction();
    arrowFunction();
    //*this is method so it return: "undefined"

};

globalfunction();
//*this is method so it return: "undefined"

//!Example 7 : nested functions in method
logger(7);
this.name = "GLOBAL";
const xx = {
    name: "xx",
    method() {
        console.log("method", this?.name);
        const normalFunction = function () {
            console.log("normalFunction", this?.name);
        };
        const arrowFunction = () => {
            console.log("ArrowFuntion", this?.name);
        }
        normalFunction();
        arrowFunction(); //*return "xx"
    },
}

xx.method();

//!Example 8: callback function;
logger(8);

this.name = "GLOBAL";
function executeThisFunction(inputFunction) {
    inputFunction();
};

const normalFunction1 = function () {
    console.log("normalFunction", this?.name);
};

const arrowfunction = () => {
    console.log("arrowfunction", this?.name);
}

executeThisFunction(normalFunction1); //return "undefined"
executeThisFunction(arrowfunction); //return "GLOBAL";

//!Example 9: callback in a method
logger(9)
this.name = "GLOBAL";
const xxx = {
    name: "XXX",
    executeThisFunction(inputFunction) {
        inputFunction();
    },
};

const normalFunction2 = function () {
    console.log("normalFunction", this?.name);
};

const arrowfunction1 = () => {
    console.log("arrowfunction", this?.name);
}

xxx.executeThisFunction(normalFunction2); //* return "undefined"
xxx.executeThisFunction(arrowfunction1); //* return "global"

//!Example 10: callback in a object
logger(10);

const obj = {
    name: "x",
    arr: [1, 2, 3],
    showArray() {
        console.log(this.arr); //trỏ vào object gọi nó 
    },

    arrowfunction: (e) => {
        console.log(e, this?.name);
    },
    normalFunction(e) {
        console.log(e, this?.name);
    },
    showArrayWithName() {
        //this.arr.forEach(this.arrowfunction);
        this.arr.forEach(this.normalFunction);
        this.arr.forEach(function (e) {
            console.log(e, this?.name);
        })

    },
};

obj.showArray();
obj.showArrayWithName();

//? Best Practice 2
//? For callback: Should use arrow function 
//? We expect this will have the same with the current context
//? Regular function dont have this

//!Example 10: callback in a object

const profile = {
    name: "x",
    methodX() {
        console.log("MethodX: ", this?.name);

        const y = {
            name: "y",
            methodY() {
                console.log("Method", this?.name);
            },
            arrowMethod: () => {
                console.log("arrowMethodY", this?.name);
                
            }
        }
        y.methodY();
        y.arrowMethod();
    }
}

profile.methodX();

