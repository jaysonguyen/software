class Novel {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    };
    getAuthor() {
        console.log("Tác Phẩm: ", this.title ,"Author: ", this.author)
    }
}

let novel = new Novel("Tôi thấy hoa vàng trên cỏ xanh", "Nguyễn Nhật Ánh")
novel.getAuthor()