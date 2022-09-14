import { useState, useCallback, useMemo, useRef } from 'react'
import Content from './Content.js';
import './App.css'

//Memo 
//* Dùng để tránh re-render những component không mong muốn

function App3() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);


  const increase = () => {
    setCount(count + 1);
  }

  const increase2 = () => {
    setCount2(count2 + 1);
  }
  return (
    <div style={{ padding: '10px, 32px' }}>
      <Content count={count} />
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <button onClick={increase}>Click me!</button>
      <button onClick={increase2}>Click me 2!</button>
    </div>
  );
}


//useCallback hook
//* Concept
//* Giúp tạo ra những hàm mới một cách không cần thiết trong component function
//* => Dẫn đến component con re-render lại một cách không kiểm soát

//* Kiến thức cần nắm
//* References type
//* React memo()
function App4() {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])

  //* Nếu deps trống thì nó sẽ trả lại tham chiếu trước đó thay vì trả lại một
  //* Hàm mới => Tham chiếu được truyền vào ở trên không bị thay đổi
  //* Case: Nếu callback sử dụng các biến và có khả năng bị thay đổi sau mỗi lần re-render
  //* Thì đưa nó vào deps 
  /* 
    * Nếu đã xác định use memo thì những cái function nên sử dụng usecallback hết 
    * để tránh re-render không cần thiết
    * Nếu không sử dụng react memo thì không cần phải sử dụng usecallback
  
  */

  return (
    <div style={{ padding: '10px, 32px' }}>
      <Content onInCrease={handleIncrease} />
      <h1>{count}</h1>
    </div>
  )
}

//useMemo hook
// Tránh sử dụng lại đoạn logic không cần thiết 

function App5() {

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const nameRef = useRef()

  const handleSubmit = () => {
    setProducts([...products, {
      name,
      price: +price
    }])
    setName('');
    setPrice('');

    nameRef.current.focus()
  }

  const total = useMemo(() => {
    const result = products.reduce((acc, cur) => {
      console.log('Tính toán lại');
      return acc + cur.price;
    }, 0);
    return result;
  }, [products])

  console.log(name);
  // Khi nào deps thay đổi thì nó mới thay đổi 

  return (
    <div style={{ padding: '10px 320px' }}>
      <input
        ref={nameRef}
        value={name}
        placeholder="Enter name..."
        onChange={e => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter price..."
        onChange={e => setPrice(e.target.value)}
      />
      <br />
      <button
        onClick={handleSubmit}
      >Add</button>
      <br />
      <ul>
        {products.map((product, index) => (
          <li key={index}>({product.name} - {product.price})</li>
        ))}
      </ul>
      <h5>Total: {total}</h5>
    </div>
  )
}


//useContext
//Hạn chế chuyển qua nhiều file trung gian
// Nối A -> B -> C
// Sử dụng context thì không cần qua B
// A - C


function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <div style={{ padding: '0 20px' }}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Content />
    </div>
  )
}
export default App;
