process.stdout.write('\033c');
function logger(message = "") {
    console.log('\n Bài số:' + message);
}

//! EXAMPLE
const a = {}
a.age = 10;
a['name'] = 'nguyen';
console.log(a);

//TODO: '01 Accessing object properties one.js'
logger(1)
function main1(obj) {
    return obj.country;
}

//TODO: '02 Accessing object properties two.js'
logger(2)
function main2(obj) {
    return obj['prop-2'];
}
console.log(main2({ one: 1, 'prop-2': 2 }))
console.log(main2({ 'prop-2': 'two', prop: 'test' }))


//TODO: '03 Accessing object properties three.js'
logger(3)
function main3(obj, a) {
    return obj[a];
}
console.log(main3({ continent: 'Asia', country: 'Japan' }, 'continent'))
console.log(main3({ country: 'Sweden', continent: 'Europe' }, 'country'))

//TODO: '04 Check if property exists in object.js'
logger(4)
function main4(obj, b) {
    return b in obj;
}
console.log(main4({ a: 1, b: 2, c: 3 }, 'b'))
console.log(main4({ x: 'a', y: 'b', z: 'c' }, 'a'))
console.log(main4({ x: 'a', y: 'b', z: 'c' }, 'z'))


//TODO: '05 Creating Javascript objects one.js'
logger(5)
function main5(string) {
    return { key: string };
}
console.log(main5('a')) //* {key:'a'}
console.log(main5('z')) //* {key:'z'}
console.log(main5('b'))  //* {key:'b'}

//TODO: '06 Creating Javascript objects two.js'
logger(6)
function main6(a, value) {
    return { [a]: value };
}
console.log(main6('a', 'b')) //* {a: 'b'}
console.log(main6('z', 'x')) //* {z: 'x'}
console.log(main6('b', 'w'))  //* {b: 'w'}


//TODO: '07 Creating Javascript objects three.js'
logger(7)
function main7(arrKey, arrValue)
//! arrKey chỉ là một variable chứa tên Key
{
    /*     const newObject = {};
        let index = 0
        for (const i of arrKey) {
            newObject[i] = arrKey[index];
            index++; 
        }
        return newObject; */

    // Cách 2
    return arrKey.reduce((acc, cur, i) => {
        return { ...acc, [cur]: arrValue[i] }
    }, {});
}
console.log(main7(['a', 'b', 'c'], [1, 2, 3])) //* Expected {a:1,b:2,c:3}
console.log(main7(['w', 'x', 'y', 'z'], [10, 9, 5, 2])) //* Expected {w:10,x:9,y:5,z:2}
console.log(main7([1, 'b'], ['a', 2])) //* Expected {1:'a',b:2}


//TODO: '08 Extract keys from Javascript object.js'
logger(8)
function main8(a) {
    return Object.values(a);
}
console.log(main8({ a: 1, b: 2, c: 3 })); //* return values

//TODO: '09 Sum object values.js'
logger(9)
function main9(obj) {
    /*  let sum = 0;
     const arr = Object.values(obj);
     for(let i of arr) {
         sum += i;
     }
     return sum; */
    // Cách 2 

    return Object.values(obj).reduce((acc, cur) => acc + cur, 0);

}
console.log(main9({ a: 1, b: 2, c: 3 }));
console.log(main9({ j: 9, i: 2, x: 3, z: 4 }));
console.log(main9({ w: 15, x: 22, y: 13 }));

//TODO: '10 Remove a property from an object.js'
logger(10);
function main10(obj) {
    const { b, ...rest } = obj;
    return rest;

    //cách 2
    delete obj.b;
    return obj;
}
console.log(main10({ a: 1, b: 7, c: 3 }));
//* {a: 1, c: 3};
console.log(main10({ b: 0, a: 7, d: 8 }));
//*{a: 7, d: 8};
console.log(main10({ e: 6, f: 4, b: 5, a: 3 }));
//* {e: 6, f: 4, a: 3};

//TODO: '11 Merge two objects with matching keys.js'
logger(11);
function main11(x, y) {
    const { b, ...correctedY } = y;
    correctedY.d = b;
    return { ...x, ...correctedY };
}
console.log(main11({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
//* {a: 1, b: 2, c: 3, d: 4, e: 5}
console.log(main11({ a: 5, b: 4, }, { c: 3, b: 1, e: 2 }));



//TODO: '12 Multiply all object values by x.js'
logger(12);
function main12(a, b) {
    for (const key in a) {
        console.log(a[key]);
        a[key] *= b;
    }
    return a;
}

console.log(main12({ a: 1, b: 2, c: 3 }, 3));
console.log(main12({ a: 9, b: 2, c: 3, z: 4 }, 10));
console.log(main12({ w: 15, z: 22, y: 13 }, 6));



//TODO: '13 Swap object keys and values.js'
logger(13);
function main13(obj) {
    const x = {};
    //cách 1:
    // Object.entries: reutrn key and value dưới dạng mảng 2 chiều
    Object.entries(obj).forEach(([key, value]) => x[value] = key)
    return x;
    //* Cách 2;
    for (let key in obj) {
        console.log('this is key= ' + key);
        console.log('this is obj.value:= ' + obj[key]);
        x[obj[key]] = key;
    }
    return x;
}
console.log(main13({ z: 'a', y: 'b', x: 'c', w: 'd' }));
console.log(main13({ 2: 'a', 4: 'b', 6: 'c', 8: 'd' }));
console.log(main13({ a: 1, z: '24' }));


//TODO: '14 Replace empty strings in object with null values.js'
logger(14);
function main14(obj) {
    for (const key in obj) {
        if (!obj[key].trim()) {
            obj[key] = null;
        }
    }
    return obj;

}

console.log(main14({ a: 'a', b: 'b', c: '' }));
//* {a: a, b: b, c:null};
console.log(main14({ a: '', b: 'b', c: ' ', d: 'd' }));
//* {a: a, b: b, c:'null', d: null};


//TODO: '15 Extracting information from objects.js'
logger(15)
function main15(obj) {
    const { fn, ln, size, weigh } = obj;
    const x = { fn, ln };
    if (size) {
        size && (x.size = size + 'cm');
    }
    if (weigh) {
        weigh && (x.weigh = weigh + 'kg');
    }
    return x;
}

console.log(main15({ fn: 'Lisa', ln: 'Muller', age: 17, size: 175, weigh: 67 }));
//* {fn: 'Lisa', ln: 'Muller', age: 17, size: 175cm, weigh: 67kg}
console.log(
    main15({
        fn: 'Martin',
        ln: 'Harper',
        age: 26,
        email: 'martin.harper@gmail.com',
        weigh: 102,
    })
);
//* {fn: 'Martin', ln: 'Harper', age: 26, weigh: 102kg}

console.log()


//* {fn: 'Lisa', ln: 'Muller', age: 17, size: 175, weigh: 67}



//TODO: '16 Add property to each object in array.js'
// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array
logger(16)
function main16(arr = [], st) {
    return arr.map((e) => ({ ...e, continent: st }));

    //cách 2:
    arr.forEach((e) => e.continent = str)
    return arr;
}
console.log(main16([
    {
        city: 'Tokyo',
        country: 'Japan'
    },
    {
        city: 'Bangkok',
        country: 'Thailand'
    }]
    , 'Asia'));
//* [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
console.log(main16([
    {
        city: 'Stockholm',
        country: 'Sweden'
    },
    {
        city: 'Paris',
        country: 'France'
    }]
    , 'Europe'));
//* [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]


//TODO: '17 Convert array to object with counter.js'
logger(17);
function main17(arr = []) {
    const obj = {}
    for (const value of arr) {
        obj[value] = obj[value] ? obj[value] + 1 : 1;
    }
    return obj;
}

console.log(main17([1, 2, 2, 3,]));
//* {1: 1, 2: 2, 3: 1};
console.log(main17([9, 9, 9, 9, 99]))
//* [9: 3, 99: 1];
console.log(main17([4, 3, 2, 1]));
//* [1: 1, 2: 1, 3: 1, 4: 1];



console.log('Test');
console.log();
function test(arr) {
   return arr.reduce((acc, currenValue, index) => {
        return {
            ...acc,
            [currenValue]: (acc[currenValue] || 0) + 1
        }
   }, {})
}

console.log(test([1, 4, 3,2, 2, 3 ,6]));