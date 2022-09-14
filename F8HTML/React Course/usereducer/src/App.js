import { useReducer } from 'react';
import TodoApp from './Todo'

const initialValue = 0;
const DOWN_ACTION = 'down';
const UP_ACTION = 'up';

const reducer1 = (state, action) => {
  console.log('reducer running...');
  switch (action) {
    case DOWN_ACTION: {
      return state - 1
    };
    case UP_ACTION: {
      return state + 1
    };
    default: {
      throw new Error('Invalid action')
    }
  }
}



function App3() {
  const [count, dispatch] = useReducer(reducer1, initialValue)
  console.log(initialValue, count)
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    </div>
  );
}

function App() {
  return (
    <TodoApp />
  )
}

export default App