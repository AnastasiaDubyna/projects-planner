import { putData } from "../../api"
import getTasksAction from "./getTasksAction";

const putTaskAction = ({id, editedTask}) => async (dispatch) => {
    const {success, errorMessage} = await (await putData(`/tasks/editTask/${id}`, editedTask)).data;
    if (success) {
        dispatch(getTasksAction());
    } else {
        console.log(errorMessage);
    }
}

export default putTaskAction;