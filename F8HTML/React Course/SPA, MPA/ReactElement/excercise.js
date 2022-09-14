
let title = "Day la title"


function PostItem() {
    return (
        <div className="post-item">
            <img src="./khaitruongresortlonnhatvietnam.jpg" />
            <h2 className="post-title">{}</h2>
            <p className="post-desc">Chúc bạn một ngày thành công</p>
            <p className="post-pubished">Một ngày trước</p>
        </div>
    )
}


const app = (
    <div className="post-list">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />

    </div>
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);