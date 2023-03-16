import { postData } from "../../api";
import getTasksAction from "./getTasksAction";

const postTaskAction = ({newTask}) => async (dispatch) => {
    const response = await (await postData("/tasks/postTask", newTask)).data;
    if (response.success) {
        dispatch(getTasksAction());
    } else {
        console.log(response.errorMessage);
    }
}

export default postTaskAction;