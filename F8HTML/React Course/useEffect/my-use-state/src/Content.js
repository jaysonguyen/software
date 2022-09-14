import { useEffect, useState, useLayoutEffect } from 'react'

//* Side effects: Chỉ tới một chương trình phần mềm khi có một
//* Tác động xảy ra làm thay đổi dữ liệu

// Events: Add, remove event listener
// Observer pattern: Subcrive / Unsubcribe
//Closure
// Timers: SetInterval, setTimeout, clearInterval, clearTimeOut
//useState
//Mounted / Unmounted
// ===
// Call API

//useEffect(callback, [deps])
// Callback do side effect
// [deps]: 

/* 
    *1. Update DOM
    *2. Call API
    *3. Listen DOM events
    *4. Cleanup
        -remove listener / Unsubscribe
        - Clear Timer

    * 1. useEffect(callback) 
    - Gọi callback mỗi khi component re-render
    - Gọi callback sau khi component thêm elements vào DOM
    //* Case 2: useEffect(callback, [])
    - Chỉ gọi callback một lần sau khi component mounted
    //* Case 3: useEffect(callback, [deps])
    - Callback sẽ được gọi lại mỗi khi deps thay đổi
*/
//*------ Kiến thức chung--------                                                     
//*1. Callback luôn được gọi sau khi component mount
//*2. Clean up function luôn được gọi trước khi component unmount
//*3. Clean function luôn được gọi trước khi callback được gọi (trừ mount)

//CALL API
const tabs = ['posts', 'comments', 'albums'];
function Content1() {
    const [title, setTitle] = useState('');
    const [posts, setPost] = useState([]);
    const [type, setType] = useState('posts');
    // Được gọi sau khi component-render xong
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPost(posts)
            })

        // Khi component re-render - useEffect kiểm tra deps có khác nhau trước và sau kh? nếu khác nhau
        // sẽ gọi lại callback
    }, [type])

    //Call API

    return (
        <div>
            {tabs.map((tab) => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333',
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}</button>
            ))}
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
        </div>
    )
}

//!CALL API

const nameOfTabs = ['posts', 'comments', 'albums', 'todos', 'users'];
function Content4() {
    const [type, setType] = useState('posts');
    const [items, setItem] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(item => setItem(item))
    }, [type])

    return (
        <div>

            {nameOfTabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setType(tab)}
                >{tab}</button>
            ))}

            <ul>
                {items.map((item) =>
                (
                    <li key={item.id}>{item.title || item.body || item.name}</li>
                )
                )}
            </ul>
        </div>
    )
}

//* Listen DOM EVENT
//* -Scroll
//* - Resize

const typeOfTabs = ['posts', 'comments', 'albums', 'todos', 'users'];
function Content6() {
    const [type, setType] = useState('posts');
    const [items, setItem] = useState([]);
    const [showGoToTop, setGoToTop] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(item => setItem(item))
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                //show
                setGoToTop(true);
            } else {
                //Hide 
                setGoToTop(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        console.log('add');

        //Clean up function
        return () => {
            window.removeEventListener('scroll', handleScroll);
            console.log('remove');

        }
    }, [])

    const handlePageUp = () => {
        if (showGoToTop) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }

    return (
        <div>

            {typeOfTabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setType(tab)}
                >{tab}</button>
            ))}

            <ul>
                {items.map((item) =>
                (
                    <li key={item.id}>{item.title || item.body || item.name}</li>
                )
                )}
            </ul>
            {showGoToTop && (
                <button
                    style={{
                        padding: 20,
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                    }}
                    onClick={handlePageUp}
                >
                    Go To Top
                </button>
            )}
        </div>
    )
}

function Content7() {

    const [width, setWith] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWith(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

    }, [])

    console.log('render');

    return (
        <div>
            <h1>{width}</h1>
        </div>
    )
}


//* Đếm ngược theo giây
// UseEffect với setTimeInterval và setTimeout

function Content8() {

    const [countDown, setCountDown] = useState(180)

    useEffect(() => {
        const timerId = setInterval(() => {
            setCountDown((prevState) => prevState - 1);
            console.log('Countdown')
        }, 1000)

        return () => {
            clearInterval(timerId)
        }
    }, [])



    return (
        <div>
            <h1>{countDown}</h1>
        </div>
    )
}

function Content9() {
    return (
        <div>

        </div>
    )
}

//Ứng dụng cho phép chọn avatar

function Content12() {
    const [avatar, setAvatar] = useState();

    useEffect(() => {

        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file)

        //Chon nhieu lan tren 1 cai anh
        //Reset value of anh
        e.target.value = null;
        console.log(e.target.files)
    }

    return (
        <div>
            <input
                type={"file"}
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="" width="80%" />
            )}
        </div>

    )

}


const lessons = [
    {
        id: 1,
        name: 'ReactJS là gì? Tại sao nên học ReactJS'
    },
    {
        id: 2,
        name: 'SPA/MPA là gì'
    },
    {
        id: 3,
        name: 'Arrow Function'
    }
]

function Content99() {
    const [lessonId, setLessonId] = useState(1);
    const handleComment = ({detail}) => {
        console.log(detail);
    }
    useEffect(() => {
        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment);
        }
    }, [lessonId])
    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ?
                                'red' : '#333',
                            cursor: 'pointer'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >{lesson.name}</li>
                ))}
            </ul>
        </div>
    )
}



//Concept
//1. Cập nhật lại state
//2. Cập nhật DOM(mutated)
//3. Gọi cleanup nếu déps thay đổi (syncs)
//4. Gọi useLayoutEffect(syncs)
//5. Render lại UI

function Content() {

    const [count, setCount] = useState(0);
    const handleRun = () => {
        setCount(count + 1);
    }

    useLayoutEffect(() => {
        if(count > 3) {
            setCount(0)
        }
    }, [count])
    return (
        <div>
            <h1>{count}</h1>
            <button
                onClick={handleRun}
            >Run
            </button>
        </div>
    )
}





export default Content;