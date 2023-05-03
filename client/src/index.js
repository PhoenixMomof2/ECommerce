import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { store } from './components/reducers/index'

// import reportWebVitals from './reportWebVitals';
// import usersReducer from "./usersReducer";
// import errorsReducer from "./errorsReducer";
// import itemsReducer from "./components/reducers/itemsReducer";
// import reducers from './components/reducers';


// const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
console.log('I am in the store', store)

// const root = ReactDOM.createRoot(document.getElementById('root'))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

