// Import the necessary React library function
import React from 'react';

// Import CSS styles for the Card component
import './Card.css';

// Define the Card functional component that takes 'props' as an argument
const Card = (props) => {
  // Combine the 'className' prop with the 'card' class to create a CSS class string
  const classes = 'card ' + props.className;

  // Return a <div> element with the combined class and render any child components
  return <div className={classes}>{props.children}</div>;
};

// Export the Card component as the default export
export default Card;
