process.stdout.write('\033c');

//! gồm một cặp key và value 

const temp = [ [1, 2], [2, 3] ]; //? key == 1, value == 2
const myMap = new Map(temp);

//* Nhận một cặp key add nó set(k, v) add to map(k ,v);

myMap.set(1, 2); //? số một xuất hiện 2 lần
myMap.set(2, 4); //? số 2 xuất hiện 4 lần
myMap.set(3, 2);
console.log(myMap)

//* get nhận vào tham số k và return v nếu nó tồn tại còn không trả về undefined

console.log(myMap.get(2));

//* delete(k) delete một trong arr
myMap.delete(2);
console.log(myMap);

//* kiểm tra xem có key số 1 hay chưa
console.log(myMap.has(1));
console.log(myMap.has(4));

//* size trả về số cặp tồn tại trong map 
console.log('This is map size: ' + myMap.size);

const arr = [1, 2, 3, 4, 2, 2, 3, 4, 1, 5, 2, 7];
/* const myMap2 = new Map();
for (const x of arr) {
    if(myMap2.has(x) === false) {
        myMap2.set(x, 1);
    } else {
        const lastValue = myMap2.get(x);
        myMap2.set(x, lastValue + 1);
    }
}
 for (const pair of myMap2) {
    console.log(pair);
 } */

 //? Tìm phần tử có nhiều phần tử nhất trong mảng
 //? const arr = [1, 2, 3, 4, 2, 2, 3, 4, 1, 5, 2, 7];

 const majorityElement = function(nums) {
    const myMap3 = new Map();
    for (const x of arr) {
        if(myMap3.has(x) === false) {
            myMap3.set(x, 1);
        } else {
            const lastValue = myMap3.get(x);
            console.log('this is pre: ' + lastValue);
            myMap3.set(x, lastValue + 1);
            console.log('this is last value: ' + lastValue)
            console.log(myMap3)
        }
    }
    let result = 0;
    let maxSoLanXuatHien = 0;
    for (const pair of myMap3) {
        const key = pair[0];
        const value = pair[1];
        if(maxSoLanXuatHien < value) {
            maxSoLanXuatHien = value;
            result = key;
        }
    }
    return result
 }

 console.log('So lan xuat hien nhieu nhat: ' + majorityElement(arr));

 // method 2 :

 const majorityElement2 = function(nums) {
    const myMap3 = new Map();
    const result = nums[0];
    myMap.set(result, 0);
    for (const x of arr) {
        if(myMap3.has(x) === false) {
            myMap3.set(x, 1);
        } else {
            const lastValue = myMap3.get(x);
            console.log('this is pre: ' + lastValue);
            myMap3.set(x, lastValue + 1);
            console.log('this is last value: ' + lastValue)
            console.log(myMap3)
        }
        if(myMap3.get(x) > myMap3.get(result)) {
            result = x;
        }
    }
    
    return result
 }

 const m = new Map();

 m.set({}, []);
 m.set([], '');

 console.log('this is m: ' + m );



