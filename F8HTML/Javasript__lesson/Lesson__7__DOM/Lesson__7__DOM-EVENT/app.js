
var inputElement1 = document.querySelector('input[type = "text"]');
/* console.log(inputElement1); */

/* inputElement1.onchange = function(e) {
    console.log(e.target.value);
}; */

var inputValue;

inputElement1.oninput = function(e) {
    inputValue = e.target.value;
}; // => gõ ăn theo từng chữ


var inputElement2 = document.querySelector('input[type = "checkbox"]');
inputElement2.onchange = function(e) {
    console.log(e.target.checked);
}; // => gõ ăn theo từng chữu


var inputElement3 = document.querySelector('select');
inputElement3.onchange = function(e) {
    console.log(e.target.value);
}; 


// Key up key down
// e.which = mã code thằng vừa bấm

var inputElement4 = document.querySelector('input[type = "text"]');
inputElement4.onkeyup = function(e) {
   console.log(e.which);
   switch(e.which) {
       case 27: 
            console.log('Exit');
            break;
        case 49:
            console.log('Đây là số 1');
            break;
   }
}; 

// lăng nghe trên toàn website không cần nhấn vào input

document.onkeyup = function(e) {
    switch(e.which) {
        case 27: 
            console.log('Exit2');
            break;
    }
}


// 1. preventDefault => Bỏ đi các thuộc tính mặc định
// 2. stopPropagation

var aElements = document.links;
console.log(aElements);

for(var i = 0; i < aElements.length; i++) {
    aElements[i].onclick = function(e) {
        if(e.target.href.startsWith('https://f8.edu.vn')) {
            e.preventDefault();
        }
    }
}


// VD2

var prevenDe = document.querySelector('ul');

prevenDe.onmousedown = function(e) {
    e.preventDefault();
};

prevenDe.onclick = function(e) {
    console.log(e.target);
};

// 2. stopPropagation
// NGăn chặn các hành vi nổi bọt hoặc sự kiện lan truyền

/* <div onclick="console.log('DIV')">
DIV
<button onclick="console.log('click me!')">Click me!</button>
</div>
=> in từ thẻ trog ra ngoài 
=> loại bỏ click me
*/

/* document.querySelector('div').onclick = function() {
    console.log('DIV');
};

document.querySelector('button').onclick = function(e) {
    e.stopPropagation();
    console.log('CLICK ME!');
} */


// 1. DOM EVENT & EVENT LISTNER
// 1. DOM sử dụng DOM EVENT trong những case đơn giản và hông muốn remove event 
// sử dụng trong các trương hợp cụ thể như onmouseup...
// 1. Xử lý nhiều việc khi 1 event xảy ra
// 2 . Lắng nghe / Hủy bỏ lắng nghe

// 1 DOM EVENT
var btn = document.querySelector('button');

/* btn.onclick = function(e) {
    e.stopPropagation();
    console.log('Task 1');

    console.log('Task 2');

    console.log('Task 3');

};

setTimeout(function() {
    btn.onclick = function() {};
}, 3000);
 */
// 2 EVENT LISTENER; hủy bỏ một function mà không muốn lắng nghe nữa
// hữu hiệu khi có nhiều listener
// Có thể lắng nghe nhiều lần

btn.addEventListener('click', function(e) {
    console.log('EVENT 1');
});

btn.addEventListener('click', function(e) {
    console.log('EVENT 2');
});

btn.addEventListener('click', function(e) {
    console.log('EVENT 3');
});


function viec1() {
    console.log('1');
}

function viec2() {
    console.log('2');

}function viec3() {
    console.log('3');
}

btn.addEventListener('click', viec1);
btn.addEventListener('click', viec2);
btn.addEventListener('click', viec3);

setTimeout(function() {
    btn.removeEventListener('click', viec2);
}, 3000)
