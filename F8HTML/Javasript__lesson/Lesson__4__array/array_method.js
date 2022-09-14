// Converting Array to Strings
const fruits = ["Banana", "Orange", "Mango"];
//method tostring() converts an array to a string of (comma separated) array values
document.getElementById("demo").innerHTML = fruits.toString();

// The join() method also joins all array elements into a string
// but in addition can specify the separator
document.getElementById("demo").innerHTML = fruits.join(" + ");

/* Popping and Pushing */
// The pop() method removes the last element from an array:
fruits.pop();
console.log(fruits);

// The push() method adds a new element to an array(at the end):
fruits.push("Mango");
fruits.push("kiwi");
console.log(fruits);

/* Shifting Elements */
// Remove the first index and the order exlement to the left
fruits.shift();
console.log(fruits);

/* Unshihft */
// add a new element to array(at the beginning), and "unshift" older element;
fruits.unshift("thuhuyen");
console.group(fruits);

/* Changing Elements */
fruits[1] = "Yeu thanh nguyen";
console.log(fruits);

/* length */
// To append a new element to an array -- noios them phan tu vao mang
fruits[fruits.length] = "sabuche"
console.log(fruits);

fruits[fruits.length] = "magcau";
console.log(fruits);

/*delete */
/* console.log("delete");
delete fruits[3];
console.log(fruits); */

/* concat() */
//creates a new array by merging (concatenating) exting arrays:
const myGirls = ["Giang", "Huyen"];
const myBoys = ["Dat", "Nguyen"];
const kid = ["khoa", "Phat"];

const myChildren = myGirls.concat(myBoys).concat(kid);
// const mychildren = myGirls.concat(myBoys, kid)
console.log(myChildren);

/* concat can also take string as arguments */
const child = myGirls.concat("Van Tai");
console.log(child);

/* Splice */
//method can e used to add new item to an array:
console.log(fruits);
fruits.splice(2, 0, "Lemon", "Khe");
console.log(fruits);
// 2 defines the position where new elements shoudld be added (splice in)
// 0 defines how many elements should be removed
// The rest of the paremeters ("Lemon", "Khe") defined the new elements to be added
// splice() method returns an array with the deleted items
console.log(fruits);
fruits.splice(2, 2, "Lemon", "Nho");
console.log(fruits);

console.log(fruits);
fruits.splice(0, 5);
console.log(fruits);

/* SLICE */
// The slice() method slices out a piece of an array into a new array.
fruits.unshift("thom", "khe");
console.log(fruits);
const c = fruits.slice(1);
console.log(c);

//does not remove any elements from the source array
// example slices out a part of an array startin from array element 3
/* console.log(fruits);
const d = fruits.slice(3);
console.log(d); */

console.log("*****************************");
/* The slice() method can take two argumnts like slice(1, 3) */
// the moethod then selects elements from the start argumentm, and up tp (but not incuding) tje end argument
console.log(fruits);
const e = fruits.slice(0, 2);
// 0 is defines the start postion
// 2 the number of number keep
console.log(e);

console.log("*****************************");
//If the end argument is omitted(bi bo qua), the slice() out the rest of the array.
const f = fruits.slice(2);
console.log(f);

console.log(fruits);
// The slice() does not remove any elements from the source array
// khai bao va luu vao mot var 

/* alert(new Date); */

console.log('tet huc chuc')
var a = 2;
var b = 2;
let result991 = 0;
a && (result991 = b);
console.log(a);

/* Array 2
- foreach()
- every() // check all array's element have to meet some reason // tra ve true or false
- some()
- find() // return only one true element
- filter() // return all true element
- map() // CHỉnh sửa các element của một array
- reduce()
*/

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coins: 250,
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coins: 250,
    },
    {
        id: 3,
        name: 'Ruby',
        coins: 0,
    },
    {
        id: 3,
        name: 'Ruby',
        coins: 0,
    },
];

function replay(course) {
    return CSSCounterStyleRule;
}

courses.forEach(function (course, index) {
    console.log(index, course);
});

var checkCourse = courses.every(function (course) {
    return course.coins === 0;
});
console.log(checkCourse);


var checkCourse2 = courses.some(function (course) {
    return course.coins === 0;
});
console.log(checkCourse2);



var findCourse = courses.find(function (course) {
    return course.name === 'Ruby';
});
console.log(findCourse);


var listCourse = courses.filter(function (course) {
    return course.name === 'Ruby';
});
console.log(findCourse);

var formValue = [
    { field: 'name', value: 'Sơn Đặng' },
    { field: 'age', value: 18 },
    { field: 'address', value: 'Hà Nội' },
    // ...
]
var ob = {};
formValue.forEach(function (values) {
    ob[values.field] = values.value;
    console.log(values.value);
})

console.log(ob);

var arraytesting = ['thanh', 'thanh nguyen', 'nguyen thanh'];
var key1 = 'nguyen';
var array30 = [];
for (var i of arraytesting) {
    if (i.search(key1) != -1) {
        array30.push(i);
    }
}
console.log(array30);

var a = [1, 2, 6, 8];
var b = [2, 9, 6];

function findtheanswer(array1, array2) {
    var a = [];
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) {
                a.push(array1[i]);
            }
        }
    }
    console.log(a);
}

findtheanswer(a, b);

/* MAP */
// VD muốn thêm trước giá phải có chữ :GIÁ
var courses3 = [
    {
        id: 1,
        name: 'Javascript',
        coins: 250,
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coins: 250,
    },
    {
        id: 3,
        name: 'Ruby',
        coins: 0,
    },
    {
        id: 3,
        name: 'Ruby',
        coins: 0,
    },
];

function mapCourse(course, index, originArray) {
    //console.log(course);
    return {
        id: course.id,
        name: `Ten: ${course.name}`,
        coins: course.coins,
        TextCoin: `Gia: ${course.coins}`,
        index: index,
        OriginArray: originArray,
    }
}

console.log('mapp********3333**************')
function mapCourse(course, index, originArray) {
    //console.log(course);
    return course.name;//`<h2> ${course.name} </h2>`;
}

var newCourses = courses3.map(mapCourse);
//console.log(newCourses.join(''));
console.log(newCourses);



var checkMap = [1, 'hi', false, undefined, '', NaN];
function checkmap(course) {
    return Boolean(course);
}

var map = checkMap.map(checkmap);
console.log(map);

/*  */
console.log('*****************')
var x = 12;
console.log(typeof x.toString());


var checkString = [1, 2, 3, 4, 5];

function checkSmap(number) {
    return number.toString();
};

var result = checkString.map(checkSmap);
console.log(result);

// Array Reduce() : tra ve mot gia tri duy nhat

var courses3 = [
    {
        id: 1,
        name: 'Javascript',
        coins: 250,
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coins: 250,
    },
    {
        id: 3,
        name: 'Ruby',
        coins: 0,
    },
    {
        id: 3,
        name: 'Ruby',
        coins: 0,
    },
];

function coinhandler(accumulator, currentValue, currentIndex, originArray) {
    var total = accumulator + currentValue.coins;
    console.table({
        'Lượt chạy: ': currentIndex,
        'Biến tích trữ: ': accumulator,
        'Giá trị hiện tại: ': currentValue.coins,
        'Tích trữ được: ': total,
    });
    return total;
}


var result = courses3.reduce(coinhandler, 0); // khong la bien luu tru



var NumberArray113 = [1, 2, NaN, '', 'Hi'];
var result = 0;

function total(accumulator, currentValue) {
    if (typeof currentValue === 'number' && Number.isNaN(currentValue) === false) {
        result = accumulator + currentValue;
    }
    return result;
}
var result2 = NumberArray113.reduce(total, 0);
console.log(result2)


// Flat - "Làm phẳng mảng"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function (accumulator, currentValue) {
    return accumulator.concat(currentValue);
}, []);

console.log(flatArray);

// Lấy ra khóa học và đưa vào một mảng mới
var topics = [
    {
        topic: 'Font-End',
        courses: [
            {
                id: 1,
                title: 'HTML, CSS'
            },
            {
                id: 2,
                title: 'Javascipt'
            }
        ]
    },
    {
        topic: 'Back-End',
        courses: [
            {
                id: 1,
                title: 'PHP'
            },
            {
                id: 2,
                title: 'NodeJS'
            }
        ]
    }
];

var newCourse = topics.reduce(function (accumulator, currentValue) {
    return accumulator.concat(currentValue.courses);
}, []);

console.log(newCourse);


Array.prototype.reduce2 = function (callback, result) {
    let i = 0;
    if (arguments.length < 2) {
        i = 1;
        result = this[0];
    }
    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}

var array = [1, 2, 3, 4, 5];



var result = array.reduce2(function (number, currentValue) {
    return number + currentValue;
});

console.log(result);

var result2 = array.reduce2((number, currentValue) => {
    return number + currentValue;
});

console.log(result2);

// includes method: tìm trong chuỗi hoặc trong mảng có một chuỗi nào đó

var includeCheckString = 'Responsive web design';

console.log(includeCheckString.includes('Responsive', 2));


var courrseStringIncludeCheck = ['Javascript', 'PHP', 'Dart', 'Javascript'];
console.log(courrseStringIncludeCheck.includes('Javascript', 0));
// Nếu truyền đối số vào Index thì nó sẽ cộng theo: array.length + -3;

console.log('*****************************************');


Array.prototype.find2 = function (callback) {
    var result = 0;
    for (var i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            return this[i];
        }
    }
    return undefined
};

var resul2t = courrseStringIncludeCheck.find2(function (course) {
    return course == 'Javascript';
});

console.log(resul2t);

console.log('******************filler');
Array.prototype.filter2 = function(callback) {
    var obj = [];
    for (var i in this) {
        if(this.hasOwnProperty(i)) {
            var result = callback(this[i], i, this);
            if(result){
                obj.push(this[i]);
            }
        }
    }
    return obj;
}

var result = courrseStringIncludeCheck.filter2(function (course) {
    return course == 'Javascript';
});

console.log(result);


console.log('******************Some2');

Array.prototype.some2 = function(callback) {
    var flag = false;
    for(var i in this) {
        if(this.hasOwnProperty(i)) {
            if(callback(this[i], i, this)){
                flag = true;
                break;
            }
        }
    }
    return flag;
}

var result =  courrseStringIncludeCheck.some2(function(course) {
    return course == 'PHP';
});

console.log(result);

console.log('******************Every');
var arrayEvery2 = ['PHP', 'PHP', 'PHP'];
Array.prototype.every2 = function(callback) {
    var flag = true;
    for(var i in this) {
        if(this.hasOwnProperty(i)) {
            if(!callback(this[i])) {
                flag = false;
                break;
            }
        }
    }
    return flag;
}

var result = arrayEvery2.every2(function(course) {
    return course == 'PHP';
});

console.log(result);+

console.log('************Reduce3');

var arrayNumber = [1, 2, 3, 4, 5];
Array.prototype.reduce3 = function(callback, result) {
    let i = 0;
    if(arguments.length < 2) {
        i = 1;
        result = this[0];
    };
    for(; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}

var result = arrayNumber.reduce3(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log(result);

console.log('*************************foEach');

// Khi nó duyệt qua sẽ duyệt qua cả những function mà mình tự định nghĩa
// VD: NGoài các phần tử trong mảng nó còn duyệt thêm:
// reduce2, reduce3, find2, fillter2...
// for in khong chỉ duyệt các phần tử trong mảng mà cả trong proto
// Kiểm tra xem index trong proto hay không? nó nằm trong object gần nhất
// hay không?
var courses = ['Javascript', 'PHP', 'Dart'];

Array.prototype.forEach2 = function(callback) {
    for(var i in this) {
        if(this.hasOwnProperty(i))
            callback(this[i], i, this);
    }
}

var result = courses.forEach2(function(course, index, array) {
    console.log(course, index, array);
});
















