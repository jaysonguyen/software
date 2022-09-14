import { useReducer, useRef } from 'react'
import reducer, { initState } from './reducer'
import {setJobs, addJobs, deleteJobs} from './action'
import logger from './logger'
// ------------------------------------------------------------------------
/* 
  *1. Init state
  *2. Actions
  *3. Reducer
  *4. Dispatch
*/

function App() {
    const [state, dispatch] = useReducer(logger(reducer), initState)
    const { job, jobs } = state
    return (
        <div style={{ padding: "0, 20px" }}>
            <h3>Todo</h3>
            <input
                value={job}
                placeholder='Enter name....'
                onChange={(e) => dispatch(setJobs(e.target.value))}
            />
            {console.log(job)}
            <button onClick={() => dispatch(addJobs(job))}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}
                        <span onClick={() => dispatch(deleteJobs(index))}>&times;</span>
                    </li>
                ))}
            </ul>

        </div>
    )
}

// Cách triển khai useReducer

export default App;
