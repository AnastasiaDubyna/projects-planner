import { GET_TASKS } from '../constants';
import { fetchData } from '../../api';

const getTasksAction = () => dispatch => {
    fetchData()
    .then(res => {
        dispatch({
            type: GET_TASKS,
            payload: {data: res.data.tasks}
        });
    })
    .catch(err => {
        console.log(err);
    })
};

export default getTasksAction;