import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import Component1 from './components/component1';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const Test = function (){
//   return <h1>test</h1>
// }
root.render(
  <App />
  // <React.StrictMode>
  // <Test />
  // <Component1></Component1>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
