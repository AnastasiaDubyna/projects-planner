import { editData } from "../../api"
import getTasksAction from "./getTasksAction";

const putTaskAction = ({id, editedTask}) => async (dispatch) => {
    const response = await (await editData(`/tasks/editTask/${id}`, editedTask)).data;
    if (response.success) {
        dispatch(getTasksAction());
    } else {
        console.log(response.errorMessage);
    }
}

export default putTaskAction;