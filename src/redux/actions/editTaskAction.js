import { EDIT_TASK } from "../constants";

const editTaskAction = (payload) => ({type: EDIT_TASK, payload: payload});

export default editTaskAction;