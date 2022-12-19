import { GET_TASKS, LOADING_ERROR, LOADING_SUCCESS, LOADING_START } from '../constants';

const defaultState = {
    tasks: [],
    isLoading: false,
    isLoadingError: false
};

const handleTaskReducer = (state = defaultState, action) => {
  switch (action.type) {
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