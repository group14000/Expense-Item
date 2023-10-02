import React from 'react'; // Import the React library
import ReactDOM from 'react-dom/client'; // Import the ReactDOM library (client version)

import './index.css'; // Import CSS styles from the 'index.css' file
import App from './App'; // Import the 'App' component from the 'App.js' file

// Create a root React DOM element that targets the 'root' element in the HTML document
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the 'App' component into the 'root' element defined above
root.render(<App />);
