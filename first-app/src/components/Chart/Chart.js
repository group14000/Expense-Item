import React from 'react';  // Import React library for creating React components

import ChartBar from './ChartBar';  // Import the 'ChartBar' component
import './Chart.css';  // Import a CSS file for styling

const Chart = (props) => {  // Define a functional component called 'Chart' with 'props' as its parameter
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);  // Extract an array of data point values from 'props.dataPoints'
  const totalMaximum = Math.max(...dataPointValues);  // Calculate the maximum value from the data points

  return (
    <div className='chart'>  
      {props.dataPoints.map((dataPoint) => (  // Map over each data point and render a 'ChartBar' component for each
        <ChartBar
          key={dataPoint.label}  // Assign a unique 'key' based on the data point's label
          value={dataPoint.value}  // Pass the data point's value as a prop to 'ChartBar'
          maxValue={totalMaximum}  // Pass the calculated maximum value as a prop to 'ChartBar'
          label={dataPoint.label}  // Pass the data point's label as a prop to 'ChartBar'
        />
      ))}
    </div>
  );
};

export default Chart;  // Export the 'Chart' component as the default export
