import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function tick(){
  const element= (
  <div>
    <h1>Hello, World !</h1>
    <h2>it is{new Date().toLocaleTimeString()}</h2>
  </div>);
root.render(element);
}

setInterval(tick, 1000);

