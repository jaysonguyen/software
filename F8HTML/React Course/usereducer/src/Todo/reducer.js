import { SET_JOBS, ADD_JOBS, DELETE_JOBS } from "./constant"


export const initState = {
    job: '',
    jobs: [],
}


const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOBS: {
            return {
                ...state,
                job: action.payload
            }
        }
        case ADD_JOBS: {
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        }
        case DELETE_JOBS: {
            const newJobs = state.jobs.splice(action.payload, 1)
            return {
                ...state,
                jobs: newJobs
            }
        }
        default: {
            throw new Error("Invalid action")
        }

    }
}

export default reducer