import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Display } from './props'
import {Test} from './state'


function Car() {
  return <h1> Hi, iam a car</h1>
}

class Car2 extends React.Component{
  render(){
    return <h2>Hi, Iam a car </h2>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

  <Display />
  <Test />
  
  </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
