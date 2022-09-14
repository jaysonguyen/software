
let emailkey = 'email';
const obj = {
    firstName: 'Nguyen',
    LastName: 'Thanh',
    age: 18,
    address: 'Bien Hoa Dong Nai',
    getPro: function() {
        return 'Ten: ' + this.firstName + this.LastName + this.age + 'Tuoi: ' + 'Dia Chi: ' + this.address; 
    },
    [emailkey]: 'nguyendeptrai'
}

obj.gioitinh = 'Nam';
delete obj[emailkey];

console.log(obj.firstName);

console.log(obj.getPro());

console.log(obj);

/* Object construtor */
// const User = function()
function User(firstName, LastName, id, job) {
    this.firstName = firstName;
    this.LastName = LastName;
    this.id = id;
    this.job = job;

    this.getName = function() {
        return `${this.firstName} ${this.LastName}`;
    }
}

// add thêm property vào User
User.prototype.age = 18;
User.prototype.getAge = function() {
    return this.age;
}

var lecture  = new User ('Huỳnh', 'Văn Lộc', '0123', 'lecture');
var student = new User ('Nguyễn', 'Thành Nguyên', '111123', 'student');

lecture.title = 'Học giỏi kiếm việc', //chi thêm vào object thuộc User được thôi
student.student = 'Cố gắng tìm việc 3000k đô',

delete lecture.title

console.log(lecture.getAge());
console.log(student.getName());

// Date
var date = new Date();

if(date.getMonth != 1) {
    console.log('day khong phai thang 1');
} else {
    console.log('Day la thang 1');
}

console.log(date); // => type: string
console.log(date.toString()) //=> type: object

function yearTime(hours, day, month, year) {
    this.hours = hours;
    this.day = day;
    this.month = month;
    this.year = year;
}

yearTime.prototype.second = date.getMilliseconds();


var yearTime2 = new yearTime(date.getHours(), date.getDay(), date.getMonth() + 1, date.getFullYear())
console.log(yearTime2);

console.log('*************************');
var getyear = new Date();
var getmili = getyear.getHours();
console.log(new Date(getmili));




