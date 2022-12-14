import { GET_TASKS } from '../constants';
import { fetchData } from '../../api';
import loadingStartAction from './loadingStartAction';
import loadingErrorAction from './loadingErrorAction';
import loadingSuccessAction from './loadingSuccessAction';

const getTasksAction = () => async dispatch => {
    dispatch(loadingStartAction());
    try {
        const {data} = await fetchData("/getTasks/all");
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

export default getTasksAction;