import { postData } from "../../api";
import getTasksAction from "./getTasksAction";

const postTaskAction = (payload) => async (dispatch) => {
    const response = await postData("/tasks/postTask", payload.newTask);
    if (response.success) {
        dispatch(getTasksAction());
    } else {
        console.log(response.errorMessage);
    }
}

export default postTaskAction;