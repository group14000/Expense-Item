import React from 'react'; // Import React library

import './Card.css'; // Import the CSS styles for this component

const Card = (props) => { // Define a functional component called 'Card' with 'props' as the parameter
  const classes = 'card ' + props.className; // Combine the 'card' class with any additional classes provided via 'props'

  return <div className={classes}>{props.children}</div>; // Return a div element with combined class names and rendered children
};

export default Card; // Export the 'Card' component for use in other parts of the application
