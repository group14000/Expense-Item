import React from 'react';  // Import React library for creating React components

import Chart from '../Chart/Chart';  // Import the 'Chart' component

const ExpensesChart = (props) => {  // Define a functional component called 'ExpensesChart' with 'props' as its parameter
  const chartDataPoints = [  // Initialize an array to store data points for the chart
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expense of props.expenses) {  // Loop through the expenses provided in props
    const expenseMonth = expense.date.getMonth(); // Get the month (0-indexed) from the expense date
    chartDataPoints[expenseMonth].value += expense.amount; // Add the expense amount to the corresponding month in the chart data
  }

  return <Chart dataPoints={chartDataPoints} />;  // Render the 'Chart' component and pass the chart data as props
};

export default ExpensesChart;  // Export the 'ExpensesChart' component as the default export
