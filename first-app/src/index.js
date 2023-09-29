// Import the necessary React library function
import React from 'react';

// Import the ReactDOM library's createRoot function
import ReactDOM from 'react-dom/client';

// Import CSS styles from the 'index.css' file
import './index.css';

// Import the App component
import App from './App';

// Create a root element using ReactDOM's createRoot function and specify the target element with the id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(<App />);
