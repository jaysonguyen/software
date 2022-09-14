// JSON giúp chuyển đổi một kiểu dữ liệu như: null, int, boolean, object...
// thành kiểu string hoặc ngược lại

var json = 'true';
console.log(typeof JSON.parse(json));

var jsonArray = ['Javascript', 'PHP', 'HTML'];
var obj = JSON.stringify(jsonArray);
console.log(obj);

var jsonArray2 = '["Javascript", "HTML", "PHP"]';
console.log(JSON.parse(jsonArray2)); 

var jsonObject = '{"name": "Thanh Nguyen", "age": 18}';
var obj = JSON.parse(jsonObject);
var obj2 = JSON.stringify(jsonObject);
console.log(obj);
console.log(obj2);


console.log(JSON.stringify([
    'Javascript',
    'PHP',
    'Dart'
]))