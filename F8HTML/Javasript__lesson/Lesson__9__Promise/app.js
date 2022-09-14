/* // The Reason why use because the Callback hell
// Have to show task A answer then use its to show B => C...
// Trong trường hợp phải có kết quả của A để để thực thi task B 
// rồi đến C....
// EX:
/* 
setTimeout(function() {
    console.log(1); // task 1

    setTimeout(function() {
        console.log(2);
    }, 1000);

    setTimeout(function() {
        console.log(3);
    }, 1000);

    setTimeout(function() {
        console.log(4);
    }, 1000);
}, 1000);
 */

// CONCEPT
/* 1. new promise
2. Excutor
 

// 1. Pendding: chờ xem thành công hay thất bại
// 2. Fulfilled: Trang thái thành công
// 3. Reject: Trạng thái đã thất bại


var promise = new Promise(
    // Excutor
    // Nó sẽ thực thi khi gọi Promise
    function(resolve, reject) {
        // resolve: success thành công
        // Thành công: resolve();
        // reject: Thất bại: reject();
        // KHi biết logic chạy thành công gọi: resolve();
        // KHi biết logic chạy thất bại gọi: resject();

        //Fake cal API
/*         resolve([
            {
                id: 1,
                name: 'javascript'
            }
    ]); */
       /*  reject(); 
    }
);

// USE
// Trả lại 3 property 
    promise
        .then(function(){ // Khi resolve được gọi thì then() sẽ được gọi
            console.log('1');
        })
        .catch(function(){ // Khi reject được gọi thì catch() sẽ được gọi
            // bắt lỗi khi thực hiện không thành công
            console.log('Failure!');
        })
        .finally(function(){ // Khi một trong resolve và reject được gọi thì finally sẽ được gọi
            console.log('Done!');
        })


// TÍNH chất chuỗi CHAIN

var promise2 = new Promise(
    
    function(resolve, reject) {
        resolve();
    }
);

// USE
// Trả lại 3 property 
// Tính chất 1: CHAIN(chuỗi);
// Nếu nó không return promise nó sẽ chạy thằng tieps theo
// Nếu là một promise thì nó phải chờ để chờ thăng đó chạy
    promise2
        .then(function(){ // Khi resolve được gọi thì then() sẽ được gọi
            return new Promise(function(resolve) {
                setTimeout(function() {
                    resolve([1, 2, 3]);
                }, 3000);
            })
        })
        .then(function(data){ // Khi resolve được gọi thì then() sẽ được gọi
            console.log(data);
            return 2;
        })
        .then(function(data){ // Khi resolve được gọi thì then() sẽ được gọi
            console.log(data);
            return 3;
        })
        .then(function(data){ // Khi resolve được gọi thì then() sẽ được gọi
            console.log(data);
        })
        .catch(function(){ // Khi reject được gọi thì catch() sẽ được gọi
            // bắt lỗi khi thực hiện không thành công
            console.log('Failure!');
        })
        .finally(function(){ // Khi một trong resolve và reject được gọi thì finally sẽ được gọi
            console.log('Done!');
        })


// TÍNH chất chuỗi CHAIN
function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    })
};

sleep(1000)
    .then(function() {
        console.log(1);
        return sleep(1000);
    })
    .then(function() {
        console.log(2);
        return sleep(1000);
    })
    .then(function() {
        console.log(3);
        return sleep(1000);
    })
    .then(function() {
        console.log(4);
        return sleep(1000);
    });


    /* - Method:
    + Promise.resolve
    + Promise.reject
    + Promise.all = Giúp chay song song các logic dùng các kết quả để làm việc với nhau
    => Nó không bị phụ thuộc vào nhau sử dụng all giúp 2 cái chay xong xong giúp tiết kiệm
    thời gian
    => Trả về một promise
    


var promise3 = Promise.resolve('Success');

promise3
    .then(function(success) {
        console.log('result', success);
    })
    .catch(function(err) {
        consosle.log('result', err);
    })


// Lấy kết quả của 2 thằng chạy song song với nhau
var promise4 = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve([1]);
    }, 1000)
});

var promise5 = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve([2, 3]);
    }, 2000)
});

// Promise.all nhận vào một đối số là một cái mảng
Promise.all([promise4, promise5])
    .then(function(result) {
        var result1 = result[0];
        var result2 = result[1];
        console.log(result1.concat(result2));
    })
    .catch(function(err) {
        console.log(err);
    });

 */

/* PROMISE EXAMPLE */
// Lưu trữ comment
// 1. Nơi lưu trữ user
// Bước 1. Lấy comments
// 2. Từ comments lấy ra user_id
// 2. Từ user_id lấy ra user tương ứng

var users = [
    {
        id: 1,
        name: 'Thành Nguyên',
    }, 
    {
        id: 2,
        name: 'Sơn Đặng',
    },
    {
        id: 3,
        name: 'Khoa Hoàng',
    },
];

var comments = [
    {
        id: 1, 
        user_id: 1,
        content: 'Anh Sơn chưa ra video :(',
    },
    {
        id: 2, 
        user_id: 2,
        content: 'Vừa ra xong em ơi!',
    },
    {
        id: 3, 
        user_id: 2,
        content: 'Ráng học nha em',
    },

];

// FAKE API: hàm giả để lấy ra nội dung qua internet
/* function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments);
        }, 1000);
    })
};
 */
/* function getUsersById(userIds) {
    return new Promise(function(resolve) {
       var result = users.fillter(function(user) {
           return userIds.includes(user.id);
       });
       setTimeout(function() {
           resolve(result);
       }, 1000);
    });
}

getComments()
    .then(function(comments) {
       var userIds = comments.map(function(comment) {
           return comment.user_id
       });
       return getUsersById(userIds) 
       .then(function() {
            return {
                users: users,
                comments: comments,
            };
       });
    })
    .then(function(data) {
        var commentBlock = document.getElementById('comment-block');
        var html = '';
        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user) {
                return user.id === comment.user_id;
            });
            html += `<li> ${user.name}: ${comment.content}`
        });
        commentBlock.innerHTML = html;
    });
 */

function getComment() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments);
        })
    }, 1000);
};

function getUserById(userId) {
    return new Promise(function(resolve) {
        var result = users.filter(function(user) {
                return userId.includes(user.id);
        })
        resolve(result);
    });
}

getComment() 
    .then(function(comments) {
        var userId = comments.map(function(comment) {
            return comment.user_id;
        });
       
    })


getUserById()
    .then(function(userId) {
        console.log(userId);
    })



