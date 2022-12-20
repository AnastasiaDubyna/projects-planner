import { fetchData } from "../../api";
import { GET_TASKS } from "../constants";

const searchTasksAction = (searchValue = "") => async (dispatch) => {
    const {data} = await (await fetchData(`/tasks/search/${searchValue}`)).data;

    dispatch({
        type: GET_TASKS, 
        payload: {data}
    });
};

export default searchTasksAction;