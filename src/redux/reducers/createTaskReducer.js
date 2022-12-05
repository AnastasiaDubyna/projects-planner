import { tasksData } from '../../testData';
import { ADD_TASK } from '../constants';

const defaultState = {
    tasks: tasksData
};

const createTaskReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state, 
        tasks: [...state.tasks, action.payload]
      };
      
    default:
      return state;
  }
};

export default createTaskReducer;