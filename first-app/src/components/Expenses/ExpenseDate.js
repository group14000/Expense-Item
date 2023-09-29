// Import React library
import React from 'react';

// Import CSS styles for the ExpenseDate component
import './ExpenseDate.css';

// Define the ExpenseDate functional component that takes 'props' as an argument
const ExpenseDate = (props) => {
  // Extract the month, day, and year from the 'date' prop and format them
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  // Return JSX for rendering the formatted date components
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

// Export the ExpenseDate component as the default export
export default ExpenseDate;
