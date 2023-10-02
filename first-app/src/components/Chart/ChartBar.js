import React from 'react';  // Import React library for creating React components

import './ChartBar.css';  // Import a CSS file for styling

const ChartBar = (props) => {  // Define a functional component called 'ChartBar' with 'props' as its parameter
  let barFillHeight = '0%';  // Initialize a variable to store the height of the chart bar

  // Check if 'props.maxValue' is greater than 0
  if (props.maxValue > 0) {
    // Calculate the height of the chart bar as a percentage based on 'props.value' and 'props.maxValue'
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className='chart-bar'>  
      <div className='chart-bar__inner'> 
        <div
          className='chart-bar__fill'  // Render a div element with the class 'chart-bar__fill'
          style={{ height: barFillHeight }}  // Apply inline CSS to set the height of 'chart-bar__fill'
        ></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>   
    </div>
  );
};

export default ChartBar;  // Export the 'ChartBar' component as the default export
