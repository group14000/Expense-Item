import React from 'react';  // Import React library for creating React components

import './ExpenseDate.css';  // Import a CSS file for styling

const ExpenseDate = (props) => {  // Define a functional component called 'ExpenseDate' with 'props' as its parameter
  // Extract and format the month, day, and year from 'props.date'
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className='expense-date'>  
      <div className='expense-date__month'>{month}</div> 
      <div className='expense-date__year'>{year}</div>  
      <div className='expense-date__day'>{day}</div>      
    </div>
  );
};

export default ExpenseDate;  // Export the 'ExpenseDate' component as the default export
