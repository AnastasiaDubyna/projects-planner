import { MOVE_TASK } from "../constants";

const moveTaskAction = (payload) => ({type: MOVE_TASK, payload: payload});

export default moveTaskAction;