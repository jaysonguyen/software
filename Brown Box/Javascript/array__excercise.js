process.stdout.write('\033c');

function logger(message ="") {
    console.log('\n Bài số:' + message);
}

//TODO: 1. Sort an array of strings alphabetically
logger(1);
function main1(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}

console.log(main1(['b', 'c', 'd', 'a']))

//TODO 6: Remove a specific array element
logger(6);
function main6(a, b) {
    return a.filter((x) => x !== b);
}

console.log(main6([1, 2, ,3], 2));
console.log(main6([false, 2, 4], false));

//TODO: 12 Return the longest string from an array of strings
logger(12);

function main12(arr = []){
    return arr.reduce((result, s) => (result.length > s.length ? result : s));

}
console.log(main12(['help', 'me']));
console.log(main12(['i', 'need', 'candy']));

//TODO: 13: Check if all array elements are equal
logger(13);
function main13(arr= '') {
    return new Set(arr).size <= 1;
}

console.log(main13([true, true, true, true])); // true
console.log(main13([false, false, false, false])); // true
console.log(main13([1, 1, 1, 2])); // false
console.log(main13([1, 1, '10', false])); //false

//TODO 14: Merge an arbitrary number of arrays
logger(14);
function main14(...arr) {
    const a = [];
    for (let x of arr) {
        a.push(...x);
    }
    return a;
}

function main1402(...arr) {
    const depth = 2;
    return arr.flat(depth);
}

console.log(main14([1, 2, 3], [4, 5, 6]));
console.log(main14(['a', 'b', 'c', 'd', 'e'], [4, 5, 6]));
console.log(main14([true, true], [1, [1, 2, 3]], ['a', 'b', 'c']));

//TODO: 15 Sort array by object property
logger(15);
function main15(arr){
    return arr.sort((ob1, ob2) => ob1.b - ob2.b);
}

console.log(main15([{a: 1, b: 2}, {a: 5, b: 4}]))
console.log(main15([{a: 2, b: 10}, {a: 5, b: 4}]))
console.log(main15([{a: 1, b: 7}, {a: 2, b: 1}]))

//TODO: 16 Merge two arrays with duplicate values
logger(16);
function main16(a, b) {
    let arr = [...a, ...b];
    const set = [...new Set(arr)];
    return set.sort((x, y) => x - y);
}

console.log(main16([1, 2, 3], [3, 4, 5]));
console.log(main16([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

//TODO: 17 Sum up all array elements with values greater than
logger(17)
function main17(a = [], b) {
    const s = a.filter((x) => x > b);
    console.log(s);
    return s.reduce((currentSum, e) => currentSum + e);
}

console.log(main17([1, 2, 3, 4, 5, 6, 7], 2)); // 25
console.log(main17([-10, -11, -3, 1, -4], -3)); // 1
console.log(main17([78, 99, 100, 101, 401], 99)); // 403


//TODO: 19 Group array of strings by first letter
logger(19)
function main19(arr) {
    const obj = {};
    for (const s of arr) {
        const firstCharacter = s[0].toLowerCase();
         //! [firstCharacter]: key of object
        if(obj[firstCharacter]){
            obj[firstCharacter].push(s);
            console.log('this is value: ' +obj[firstCharacter]);
            console.log('this is key of object: ' + s[0]) //! for of lấy value do đó khi truyền index sẽ lấy giá trị từng số chỉ định
        } else {
            obj[firstCharacter] = [s];
        }
    }
    return obj;
}

console.log(main19(['Alf', 'Alice', 'Ben']));
//* {a: ['Alf', 'Alice'], b: ['Ben']};
console.log(main19(['Ant', 'Bear', 'Bird']));
//* {a: ['Ant'], b: ['Bear', 'Bird']};
console.log(main19(['Berlin', 'Paris', 'Pargue']));
//* {b: ['Berlin'], p: ['Paris', 'Pargue']};

//TODO: 20 Define an array with conditional elements
logger(20)
function main20(arr, num) {
    if(num < 6)
        return [0, ...arr];
    return [num, ...arr];
}

//TODO: 21 Get every nth element of array
logger(21)
function main21(a = [], n) {
    const kq = [];
    let i = n - 1;
    while(i < a.length) {
        kq.push(a[i]);
        i += n;
    }
    return kq;

}

console.log(main21([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); //* [3, 6, 9]
console.log(main21([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5)); //* [6, 1]
console.log(main21([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2)); //* [2, 6, 4, 8, 10];