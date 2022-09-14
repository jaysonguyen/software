import './App.css';
import {useState} from 'react'
import Content from './Content';

function App() {

  const [show, getShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => getShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  );
}

export default App;
