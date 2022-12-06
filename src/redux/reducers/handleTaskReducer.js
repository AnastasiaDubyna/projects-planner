import { tasksData } from '../../testData';
import { ADD_TASK, MOVE_TASK } from '../constants';

const defaultState = {
    tasks: tasksData
};

const handleTaskReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state, 
        tasks: [...state.tasks, action.payload]
      };
    case MOVE_TASK:
      return {
        ...state, 
        tasks: [
          ...state.tasks.filter(task => task.id !== action.payload.id),
          {...state.tasks.find(task => task.id === action.payload.id), stage: action.payload.newStage}
        ]
      };
    default:
      return state;
  }
};

export default handleTaskReducer;