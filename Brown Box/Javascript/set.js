process.stdout.write('\033c');

function logger(message ="") {
    console.log('\n Bài số:' + message);
}

//! Trong một array có thể chứa được các phần tử trùng nhau nhưng trong một 'Set' không thể chứa phần tử trùng nhau
//* arr[1, 1, 2, 2, 3]
//* set[1, 2, 3]

const arr = [1, 1, 1, 2, 3, 4, 4, 4, 2, 2, 5];
const mySet = new Set(arr);
console.log(arr);
console.log(mySet)

//* Add an element into 'set' 
/* const myset2 = new Set();
for(const x of arr){
    myset2.add(x);
}
console.log(myset2)
//* remove an element from 'Set'

console.log(myset2.has(5));
console.log(mySet2.size);
myset2.delete(5);
console.log(myset2);
//* 'has' check some element does it exists/
//* 'size' the numvber of elements
console.log(myset2.has(5));
console.log(myset2.size); */

//* if it duplicate return true else return false
var containsDuplicate = function(nums) {
    const mySet3 = new Set(nums);
    if(mySet3.size === nums.length){
        return false;
    }
    return true
}

// Method 2rd
const newArr = [1, 2, 3, 4, 5, 5];
console.log(containsDuplicate(newArr)); 

//TODO: '01 Check if value is present in Set.js'
logger(1);
function main01(set = new Set(), val){
    return set.has(val);
}
console.group(main01(new Set([1, 2, 3], 2)));
console.group(main01(new Set([123], 2)));
console.group(main01(new Set(["1", "2", "3"], 2)));

//TODO: '02 Convert a Set to Array.js'
logger(2);
function main02(set = new Set){
    return [...set];
}
console.log(main02(new Set([1, 2, 3])));
//* [1, 2, 3];
console.log(main02(new Set([123])));
//* [123];
console.log(main02(new Set(["1", "2", "3"])));
//* ['1', '2', '3'];
console.log(main02(new Set(("123"))));
//* ['1', '2', '3'];

//TODO: '03 Get union of two sets.js'
logger(3);
function main03(a, b){
    const s = new Set(a);
    b.forEach((e) => s.add(e))
    return s;
}
console.log(main03(new Set('123'), new Set('234')));
//* ('1234')
console.log(main03(new Set([1, 2, 3]), new Set([3, 4, 5])));
//* [1, 2, 3, 4, 5];
console.log(main03(new Set([false, false, NaN]), new Set([true, true, NaN])));
//* [false, NaN, true];


//TODO: '04 Creating Javascript Sets.js'
logger(4);
function main04(a, b, c){
    return new Set([a, b, c]);
}
console.log(main04(1, 'b', 3))
console.log(main04(NaN, null, false))
console.log(main04('a', ['b'], { c: 3 }));



//TODO: '05 Delete element from Set.js'
logger(5);
function main05(set = new Set(), value) {
    const k = new Set(set);
    k.delete(value);
    return k;
    
}

console.log(main05(new Set([1, 2, 3]), 1));
//* [2, 3]'
console.log(main05(new Set('12345'), '3'));
//* ['1', '2', '4', '5'];
console.log(main05(new Set([1, 2, 3]), 4));
//* [1, 2, 3];

//TODO: '06 Add multiple elements to Set.js'
logger(6);
function main(set = new Set(), arr = [] ){
    arr.forEach((e) => set.add(e));
    return set;
}

console.log(main(new Set([1, 2, 3]), [4, 5, 6]));
//* [1, 2, 3, 4, 5, 6 ];
console.log(main(new Set('12345'), [...'6789']));
//* [...'123456789'];
console.log(main(new Set([1, 2, 3]), [2, 3]));
//* [1, 2, 3];

//TODO: '07 Get Intersection of two Javascript Sets.js'
logger(7);
function main07(a = new Set(), b = new Set()) {
    const x =  new Set();
    a.forEach((e) => b.has(e) && x.add(e));
    return x;
}

console.log(main07(new Set([1, 2, 3]), new Set([4, 5, 6])));
//* ();
console.log(main07(new Set('12345'), new Set([...'45678'])));
//* ('45');
console.log(main07(new Set([1, 2, 3]), new Set([2, 3, 4])));
//* ([2, 3]);




