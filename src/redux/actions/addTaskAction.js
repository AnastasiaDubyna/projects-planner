import { ADD_TASK } from "../constants"

const addTaskAction = (payload) => ({type: ADD_TASK, payload: payload}); 

export default addTaskAction;