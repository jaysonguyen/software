process.stdout.write('\033c');
function logger(message ="") {
    console.log('\n Bài số:' + message);
}

//TODO: '01 Check if two dates are equal.js'
logger(1);
function main01(a = new Date(), b =  new Date()) {
    return a.getTime() == b.getTime();
}
console.log(main01(new Date('2000/01/01 8:00:00'), new Date('2022/07/12 14:08:00')));
console.log(main01(new Date('2022/07/12 14:08:00'), new Date('2022/07/12 14:08:00')));
console.log(main01(new Date('2000/01/01 8:00:00'), new Date('2022/07/12 14:08:00')));

//TODO: '02 Return the number of days between two dates.js'
logger(2);
function main02(a = new Date(), b =  new Date()) {
    const diffMilisec = Math.abs(a-b);
    return diffMilisec / 1000 / 60/ 60/ 24;
    return Math.abs(a.getTime() - b.getTime());
}
console.log(main02(new Date('2000/01/01 8:00:00'), new Date('2022/07/12 14:08:00')));

//TODO: '03 Check if two dates fall on the exact same day.js'
logger(3);
function main03(a = new Date(), b =  new Date()) {
    console.log(a.toDateString())
    return a.toDateString() === b.toDateString();
}
console.log(main03(new Date('2022/07/12'), new Date('2022/07/12')));
console.log(main03(new Date('2022/07/12'), new Date('2022/07/13')));
console.log(main03(new Date('2022/07/12 5:45:00'), new Date('2022/07/12 6:00:00')));

//TODO: '04 Check if two dates are within 1 hour from each other.js'
logger(4);
function main04(a, b) {
    const diff = Math.abs(a-b);
    return diff / 1000 / 60 <= 60;
}
console.log(main04(new Date('2000/01/01 8:00:00'), new Date('2022/07/12 14:08:00')));
console.log(main04(new Date('2022/07/12 14:08:00'), new Date('2022/07/12 15:00:00')));
console.log(main04(new Date('2000/01/01 8:00:00'), new Date('2022/07/12 14:08:00')));

//TODO: '05 Check if one date is earlier than another.js'
logger(5);
function main05(a ,b) {
    return a < b;
}
console.log(main05(new Date('2000/01/01 8:00:00'), new Date('2022/07/12 14:08:00')));
console.log(main05(new Date('2022/07/12 14:08:00'), new Date('2022/07/12 15:00:00')));
console.log(main05(new Date('2000/01/01 8:00:00'), new Date('2022/07/12 14:08:00')));

//TODO: '06 Add n days to an existing date.js'
logger(6);
function main06(a ,b) {
    a.setDate(a.getDate() + b);
    return a.getTime();
}
console.log(main06(new Date(Date.UTC(2000,01,01)), 31));
console.log(main06(new Date(Date.UTC(2000,01,01)), 10));
console.log(main06(new Date(Date.UTC(2000,02,28,)), 2));

//TODO: '07 Calculate difference between two dates in hours, minutes, and seconds.js'
logger(7);
function main07(a = new Date ,b) {
    const diff = Math.abs(a - b) / 1000;
    return { 
        hrs: Math.floor(diff / 3600), 
        min: Math.floor((diff / 60) % 60), 
        sec: diff % 60 
    };
}
console.log(main07(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:10')));
//* Expect: { hrs: 0, min: 45, sec: 10 }
console.log(main07(new Date('2000/01/01 09:50:23'), new Date('2000/01/01 08:00:00')));
//* Expect: { hrs: 1, min: 50, sec: 23 }
console.log(main07(new Date('2000/01/01 11:04:12'), new Date('2000/01/01 08:00:00')));
//* Expect: { hrs: 3, min: 4, sec: 12 }

//TODO: '08 Return the next nearest quarter hour of a date.js'
logger(8);
function main08(date = new date) {
    const k = Math.floor((date.getMinutes() / 15));
    const nextMin = (k + 1) * 15;
    return nextMin;
}
console.log(main08(new Date(2021, 8, 10, 15, 14, 00)));
//* Expect: 15
console.log(main08(new Date(2021, 8, 10, 15, 31, 00)));
//* Expect: 45
console.log(main08(new Date(2021, 8, 10, 15, 22, 00)));
//* Expect: 30


logger('testing')
function Testing(date = new date) {
   const k = date.getMinutes();
   const nextMin = (k + 1)*15;
   return nextMin === 60 ? 0 :  nextMin;
}
console.log(main08(new Date(2021, 8, 10, 15, 14, 00)));
//* Expect: 15
console.log(main08(new Date(2021, 8, 10, 15, 31, 00)));
//* Expect: 45
console.log(main08(new Date(2021, 8, 10, 15, 22, 00)));
//* Expect: 30