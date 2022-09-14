//? Props
/* 
    ! - React elements
    * Sử dụng prop giống với attribute của HTML
    * 2 props class, for => className, htmlFor
    * phải tuân theo quy ước có sẵn
    ! - React components 
    * - sử dụng props giống như đối số cho component
    * - Tự do đặt tên props
    * - đặt theo camelCase
    * -* Có thể bao gồm dấu gạch ngang
    ! Chú ý:
    *- Prop "Key" là prop đặc biệt
    * - Props cơ bản là đối số của Component
    *   => Props có thể là bất cứ kiểu dữ liệu gì
    * - Sử dụng destructuring
*/

let title = "Day la title"


/* function PostItem(props) {
    console.log(props);
    return (
        <div className="post-item">
            <img src={props.image} />
            <h2 className="post-title">{props.title}</h2>
            <p className="post-desc">{props.desc}</p>
            <p className="post-pubished">Một ngày trước</p>
        </div>
    )
}


const app = (
    <div className="post-list">
        <PostItem
            title='C# Cho mọi nhà'
            desc='Đây là post item số 01'
            image= './khaitruongresortlonnhatvietnam.jpg'
        />
        <PostItem
            title='F# Cho mọi nhà'
            desc='Đây là post item số 02'
            image='https://gamek.mediacdn.vn/133514250583805952/2022/7/12/faker-phan-xa-1-1657568796332131676376.jpg'
        />
        <PostItem
            title='HTML and CSS'
            desc='Đây là post item số 03'
        />
        <PostItem
            title='ReactJS'
            desc='Đây là post item số 04'
        />

    </div>
) */

//! Destructuring

function PostItem({
    image,
    title,
    desc,
    callback = () => {},
}) {
    
        callback(Math.random())
    return (
        <div className="post-item">
            <img src={image} />
            <h2 className="post-title">{title}</h2>
            <p className="post-desc">{desc}</p>
            <p className="post-pubished">Một ngày trước</p>
        </div>
    )
}


const app = (
    <div className="post-list">
        <PostItem
            title='C# Cho mọi nhà'
            desc='Đây là post item số 01'
            image='./khaitruongresortlonnhatvietnam.jpg'
            callback= {function(message) {
                console.log(message)
            }}
        />
        <PostItem
            title='F# Cho mọi nhà'
            desc='Đây là post item số 02'
            image='https://gamek.mediacdn.vn/133514250583805952/2022/7/12/faker-phan-xa-1-1657568796332131676376.jpg'
        />
        <PostItem
            title='HTML and CSS'
            desc='Đây là post item số 03'
        />
        <PostItem
            title='ReactJS'
            desc='Đây là post item số 04'
        />

    </div>
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);