import './App.css';
import { useRef, useState, useEffect, memo } from 'react'

function App() {
  const [count, setCount] = useState(60)

  //! useRef trả về một object có một property: current
  const timerId = useRef()
  const preCount = useRef();


  useEffect(() => {
    preCount.current = count
  }, [count])

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount(pre => pre - 1);
    }, 1000)
  }
  const handleStop = () => {
    clearInterval(timerId.current)
  }

  console.log(count, preCount.current)

  return (
    <div style={{ padding: 20 }}>
      <h1>{count}</h1>
      <button
        onClick={handleStart}
      >Run
      </button>
      <button
        onClick={handleStop}
      >Stop
      </button>
    </div>
  )
}

export default App;