import { LOADING_ERROR, LOADING_SUCCESS, LOADING_START } from "../constants"

const defaultState = {
    isLoading: false,
    isLoadingError: false
}

const loadingReducer = (state = defaultState, action) => {
    switch (action.type) {
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
            return {
                ...state
            }
    }
}

export default loadingReducer;