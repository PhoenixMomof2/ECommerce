import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { BrowserRouter } from 'react-router-dom';
// import { store } from './components/reducers/index'
import thunk from "redux-thunk"

import rootReducer from './components/reducers'

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));


// const root = ReactDOM.createRoot(document.getElementById('root'))

ReactDOM.render(
  <BrowserRouter>
  {/* <React.StrictMode> */}
    <Provider store={ store }>
      <App />
    </Provider>
  {/* </React.StrictMode> */}
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

