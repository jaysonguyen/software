// 3 type
// 1. element: HTML Collection
//ID, tag, classname, CSS Selectors

// 2. Attribute
// 3. Text

//1. Elements
var headingNode = document.getElementById('headingID');
console.log(headingNode);

// take elements by class name
var headingNOdes = document.getElementsByClassName('headingClassName');
console.log(headingNOdes);

// take elements by tag name;
var headingNodes = document.getElementsByTagName('h4');
console.log(headingNodes);

// take elements by CSS selector =>> can take only one Selectors
var headingNodesCSS = document.querySelector('.headingClassName');
console.log(headingNodesCSS);

// take elements by CSS selector => can take all selectors
var headingNodeCSSALL = document.querySelectorAll('.headingClassName');
console.log(headingNodeCSSALL);

// HTML collection
// Can immidiately get form by 'forms'
console.log(document.forms['form-1']);

// document.anchors => return a tag has name tag;

console.log(document.anchors);

var attributeID = document.getElementById('headingID')[1];
console.log(attributeID);



console.log('********************************************');

const button = document.getElementById('button');
button.addEventListener('click', () => {
  // type in your code here
  const fn = document.getElementById('firstName');
  const ln = document.getElementById('lastName');
  const fln = document.getElementById('fullName');
  
  fln.value = fn.value + ln.value;

});


const buttonValue = document.getElementById('buttonValue');

buttonValue.addEventListener('click', () => {
  // type in your code here
  buttonValue.textContent++;

});

const input = document.getElementById('input');
console.log(input.value);
input.addEventListener('input', () => {
  // type in your code here
  let item = document.querySelectorAll('#list1 li');
  let flag = false;
  item.forEach((e) => {
    if(e.textContent == input.value) {
      e.style.display = 'block';
      console.log(e);
    } else {
      e.style.display = 'none';
    }
    if(input.value === '') {
      e.style.display = 'block';
    }
  })
});
