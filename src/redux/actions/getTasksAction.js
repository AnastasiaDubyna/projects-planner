import { GET_TASKS } from '../constants';
import { fetchData } from '../../api';
import { LOADING_ERROR, LOADING_SUCCESS, LOADING_START } from '../constants';

const getTasksAction = () => async dispatch => {
    dispatch(loadingStartAction());
    try {
        const {data} = await fetchData("/tasks/getAll");
        dispatch({
            type: GET_TASKS,
            payload: {data: data.tasks}
        });
        dispatch(loadingSuccessAction());
    } catch (err) {
        console.log(err);
        dispatch(loadingErrorAction());
    }   
};

const loadingStartAction = () => ({type: LOADING_START});
const loadingSuccessAction = () => ({type: LOADING_SUCCESS});
const loadingErrorAction = () => ({type: LOADING_ERROR});

export default getTasksAction;