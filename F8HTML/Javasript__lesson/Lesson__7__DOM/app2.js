// Attribute
// DOM Attribute

var addTitle = document.querySelector('h1');

addTitle.title = 'Heading'; // Setter
// addTitle.href
// addTitle.className...
//..

// add kiểu function
addTitle.setAttribute('class', 'heading'); // set

console.log(addTitle.getAttribute('class'));


// text
// innerText
// Lấy ra nội dung bên trong thẻ chứa nó, bỏ qua các thẻ mà chỉ 
// lấy nội dung bên trong
// textContent
// lấy ra nội dung bên trong chứa nó, bỏ qua các thẻ nhưng vẫn
// lấy vị trí của nội dung 
// VD: <span> Heading </span>
//      <span> Testing </span>
// =>           Heading
//              Testing
// textContent = > chỉ lấy nội dung textNode bên trong 
// => lấy ra được nội dung trong thẻ chỉ định

var headingElement = document.querySelector('h1');
console.log(headingElement.innerText); // thay đổi cái gì là thực tế nó thay đổi theo
console.log(headingElement.textContent); // THay đổi source code luôn
/* headingElement.innerText = 'New Heading H1'; */

headingElement.innerText = `

    Đây là lùi dòng
`;

headingElement.textContent = `


    Đây là textContent không làm lùi dòng mà làm lùi dòng
    trong html;
`;


// Thêm một element vào trong một element đang có sẵn
// innerHTML => lấy thẻ bên trong 
// outerHTML => lấy luôn cả thẻ gọi đến


var boxElement = document.querySelector('.box');
boxElement.innerHTML = '<h1>This is new H1 add by inner</h1>'
console.log(boxElement.innerHTML);

console.log('********************');

var boxElement = document.querySelector('.box');
boxElement.outerHTML = '<h1>This is new H1 add by OuterHTML</h1>'
console.log(boxElement.outerHTML)

boxElement.style.color = 'red'; // khongo the set duoc do co sung dot cua outerHMTM (prediction);


// DOM style

var boxElement1 = document.querySelector('.box2');
boxElement1.style.width = '200px';
boxElement1.style.height = '200px';
boxElement1.style.backgroundColor = 'blue';

Object.assign(boxElement1.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'green',
});

console.log(boxElement.style);


// ClassList
// Add
// contains
// remove
// toggle

var boxElement3 = document.querySelector('.box3');
/* console.log(boxElement3.classList);
console.log(boxElement3.classList.length);
console.log(boxElement3.classList.value); // => return the string beside the class */

boxElement3.classList.add('navy', 'blue', 'green');

// check exsist class

console.log(boxElement3.classList.contains('navy'));









































