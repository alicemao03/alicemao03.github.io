import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import LapCounter from './Projects/LapCounter'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <LapCounter />
    <Home />
    <About />
    <Projects />
    <Contact /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
