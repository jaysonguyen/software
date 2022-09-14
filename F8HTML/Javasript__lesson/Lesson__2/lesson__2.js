var str = 'Thanhnguyen khong co don';
console.log(str.slice(-12,-7));

var fulName = 'Thành Nguyên \" là siêu nhân\"';
console.log('fullName');

console.log('Nguyen vu thanh nguyen'.length);

var someText = "Moojt số case sử dụng backslash"
+ "Thành nguyên không đẹp trai thì thôi đẹp trai thì khỏi nói nha";

console.log(someText);

var firstName = 'nguyen';
var lastName = 'Thanh nguyen';
console.log(`toi la: ${firstName} ${lastName}`);


/* Làm việc với chuỗi 
1. Length;
2. Find index; = > tìm vị trí một kí tự trong một chuỗi
3. Cut string;
4. Replace
5. Convert to upper case
6. Convert to lower case
7. Trim
8. Split
9. Get achecracter by index
*/
 var mystring = 'Thành Nguyên học JS tại F8 JS';
console.log(mystring.indexOf('Nguyên'));

console.log(mystring.indexOf('JS', 6));
/* Bắt đầu tìm tự vị trí mình xác định */
console.log(mystring.lastIndexOf('JS'));

/* TÌM KIẾM */
console.log(mystring.search('JS'))
/* Không thể truyền vào vị trí bắt đầu tìm kiếm
Hỗ trợ tìm kiếm theo biểu thức chính quy */

/* CUT String */
console.log(mystring.slice(6, 12));
console.log(mystring.slice(0)); // Cắt toàn bộ
/* Tham số đầu tiên vị trí bắt đầu 
Tham số thứ 2 vị trí kết thúc */

/* Cắt từ phải snag trái*/
console.log(mystring.slice(-6, -1));



//Replace => ghi đè lên 
console.log(mystring.replace('JS', 'Javascript'));
/* Biểu thức chính quy */
console.log(mystring.replace(/JS/g, 'Javascript'));


/* Convert to uppercase */
/* Convert to lowercase */

console.log(mystring.toUpperCase());
console.log(mystring.toLowerCase());


/* Cắt khoảng trắng */
console.log(mystring.trim().length);

/* Split cắt một chuỗi thành một array */
var language = 'Javascipt, PHP, Ruby';
console.log(language.split(' '));
/* Cắt đi phần tử trong ngoặc */
/* Cắt đi từng chữ cái một */
console.log(language.split(''));
/*=> cát đi kí tự cho trước thành một mảng */

/* Get a character by index 
Lấy được một kí tự bởi một inddex cho trước
*/
console.log(mystring.charAt(0)); /* Nếu khong tồn tại kĩ tự nó sẽ trả về chuỗi rỗng */
/* Lấy kí tự theo vị trí */
console.log(mystring[10]);/* Nếu không có kí tự thì nó sextrar về undefined */







