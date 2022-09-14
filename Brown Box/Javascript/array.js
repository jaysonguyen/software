process.stdout.write('\033c');

const arr = [1, 2, 3, 'Nguyen', {}];
console.log(arr);
console.log(arr.length);

arr[20] = 100;
console.log(arr);

//* add new property

arr.name = 'Thu Huyen'; //! la thuoc tinh khong duoc tinh vao phan tu
console.log(arr);
console.log(arr.length);

arr['initTime'] = '2000'; //! la thuoc tinh khong duoc tinh vao phan tu
console.log(arr);
console.log(arr.length);

// WWrapper Object: Array
    //* Array.isArray()
    console.log(Array.isArray(arr))

// Looping 
    // For of giong het for each
for (const x of arr) {
    console.log(typeof x)
}
    // For in gia tri la index


let a = 10;
let d = a + '';
const b = [];
for (const x of d) {
    let c = parseInt(x);
    b.push(c);
}

console.log(b);

