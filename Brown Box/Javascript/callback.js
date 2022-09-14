process.stdout.write('\033c');

/**
 * ! Function is a type
 * ! It can act like a variable
 * ! Can back it mean: callback function
 */

const tinhTong = (a, b) => a + b;
const tinhHieu = (a, b) => a - b;
const tinhTich = (a, b) => a * b;
const tinhThuong = (a, b) => a / b;

const phepToan2SoHang = (phepTinhFunc, a, b) => {
    const kq = phepTinhFunc(a, b);
    return kq;
}

const log = (a) => {
    console.log(a);
}

const a = 1;
const b = 2;
console.log(phepToan2SoHang(tinhTong, a, b));
console.log(phepToan2SoHang(tinhThuong, a, b));
console.log(phepToan2SoHang(log, a, b));

//! Callback function la một function được dùng như một parameter
//* Được sử dụng trong lập trình bất đồng bộ


/* const sayHello = (name) => console.log(`Hello ${name}`);
console.log('-- BEGIN --');
setTimeout(sayHello, 3000, 'Nguyen');
console.log('-- End --'); */
//! Error => Không theo thứ tự mà nó thực hiện cái even nào được thực thi trước
//! Do đó phải dùng => Callback

//? callback with array function (utility function)
//? callbacks with array function

//* ForEach()
//? Rút gọn code nhiều hơn
//? 
function printNumber(x) {
    console.log('số: ' + x)
}

function printCummer(x) {
    console.log(x + '-');
}

function main01() {
    const arr = [1, 2, 3, 4, 5, 6];
    arr.forEach((currentNumber, index, currentArray) => {
        arr[index] = arr[index] * 2;
    });
    arr.forEach(printCummer)

}
main01();


//* map
//? Muốn sửa đổi trực tiếp
function useMap() {
    const arr = [1, 2, 3, 4, 5, 6];
    const arr2 = [1, 2, 3, 4, 5, 6];

    //! Nếu không sử dụng map
    console.log('Cách không sử dụng map, tạo ra một mảng mới mà không muốn sửa đổi mảng cũ')
    const doubleArr = [];
    arr.forEach(x => doubleArr.push(x*2));
    console.log(doubleArr)
    
    //! sử dụng map
    const tripleArr = arr.map((x) => 3 * x);
    console.log('TripeNumber: ');
    console.log(tripleArr);
    //* sử dụng phương pháp ánh xạ
}
useMap();

//*filter
//? Lọc các phần tử được chọn
//? Trả về các phần tử

console.log('\n USER FILTER');
function useFilter(){
    const arr = [1, 2, 3, 4, 5, 6];
    //! Nếu không sử dụng filter
    const soLe = [];
    arr.forEach((x) => {
        if(x % 2 != 0 ) {
            soLe.push(x);
        }
    })

    //! Nếu sử dụng filter => Predicate nó trả về giá trị là true of false
    //! Trả về là true or false
    console.log('so chan')
    const soChan = arr.filter((x) => x % 2 == 0)
    console.log(soChan)

    console.log('so le')
    console.log(soLe);
}
useFilter();

//* Find
//* FindIndex
//? Tìm số đầu tiên thỏa điều kiện
function userFind() {
    const arr = [1, 2, 3, 4, 5, 6];
    //! Nếu không sử dụng find
    let foundItem = -1;
    for (const x of arr) {
        if(x > 3) {
            foundItem = x;
           break;
        }
    }

    //! Nếu sử dụng find => Nhận vào một cái predicate: Một function trả về true or false
    let foundItem2 = arr.find((x) => x > 4);
    console.log(foundItem2);
}

userFind();

//*sort()
//* Truyền vào callback(a, b) với 2 parameter
//? Nó trong trường hợp tăng dần thì a - b > 0
//? Nó trong trường hợp giảm dần thì  b - a < 0;
function userSort() {
    const arr = [9, 10, 15, 1, 2, 5, 6, 90];
    const sorting = arr.sort((a, b) => b - a) //! Sắp xếp giảm dần
    console.log(sorting);
    arr.sort((a, b) => a - b);
    console.log(arr) //! Sắp xếp tăng dần
}
userSort()

//*reduce
//* Trả về một giá trị mà người dùng muốn

function usingReduce(){
    const arr = [1, 2, 3, 4, 5, 6];
    const sum = arr.reduce((pre, x) => pre + x, 0)
    return sum;
}





