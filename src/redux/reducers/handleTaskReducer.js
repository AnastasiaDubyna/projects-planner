import { tasksData } from '../../testData';
import { ADD_TASK, EDIT_TASK, MOVE_TASK, GET_TASKS } from '../constants';

const defaultState = {
    tasks: []
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
    case EDIT_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks.filter(task => task.id !== action.payload.id),
          action.payload.editedTask
        ]
      }
    case GET_TASKS:
      return {
        ...state, 
        tasks: action.payload.data,
        source: "from axios"
      }
    default:
      return state;
  }
};

export default handleTaskReducer;