import { ADD_TASK, EDIT_TASK, MOVE_TASK, GET_TASKS, POST_TASK, LOADING_ERROR, LOADING_SUCCESS, LOADING_START } from '../constants';

const defaultState = {
    tasks: [],
    isLoading: false,
    isLoadingError: false
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
        tasks: action.payload.data
      }
    case LOADING_START:
      return {
          ...state, 
          isLoading: true
      }
    case LOADING_SUCCESS:
      return {
          ...state, 
          isLoading: false,
      }
    case LOADING_ERROR:
      return {
          ...state, 
          isLoading: false, 
          isLoadingError: true
      }
    default:
      return state;
  }
};

export default handleTaskReducer;