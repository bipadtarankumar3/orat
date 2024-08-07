import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import './App.css'
import App from'./App'
import TimerModal from '../src/components/timermodal'; // Update this line to the correct path
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Temporarily remove React.StrictMode for testing
  <Provider store={store}>
    <App />
    <TimerModal />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
