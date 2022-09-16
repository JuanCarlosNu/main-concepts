import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';



//When React sees an element representing a user-defined component(welcome),
// it passes JSX attributes(sarita) and children(hello, {props.name}) to this component(element), as a single object. 
//    We call this object “props”.


  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  function App() {
    return(
      <div>
    <Welcome name="Sarita" />
    <Welcome name="camila" />
    <Welcome name="juan" />
    </div>);
  }  
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
