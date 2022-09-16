import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

//When React sees an element representing a user-defined component(welcome),
// it passes JSX attributes(sarita) and children(hello, {props.name}) to this component(element), as a single object. 
//    We call this object “props”.


  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  const element = <Welcome name="Sarita" />

root.render(element);
