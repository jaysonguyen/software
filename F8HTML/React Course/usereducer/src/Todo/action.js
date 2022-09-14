import { SET_JOBS, ADD_JOBS, DELETE_JOBS } from "./constant"


export const setJobs = (payload) => {
    return {
      type: SET_JOBS,
      payload
    }
  }
  
  export const addJobs = (payload) => {
    return {
      type: ADD_JOBS,
      payload
    }
  }
  
  export const deleteJobs = (indexDelete) => {
    return {
      type: DELETE_JOBS,
      indexDelete
    }
  }
  