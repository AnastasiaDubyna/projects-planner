import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { tasksData } from './testData';

const defaultState = {
  tasks: tasksData
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state, 
        tasks: [...state.tasks, action.payload]
      };
      
    default:
      return state;
  }
}

const store = createStore(reducer);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
