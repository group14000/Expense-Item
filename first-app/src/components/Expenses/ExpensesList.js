import React from 'react';  // Import React library for creating React components

import ExpenseItem from './ExpenseItem';  // Import the 'ExpenseItem' component
import './ExpensesList.css';  // Import a CSS file for additional styling

const ExpensesList = (props) => {  // Define a functional component called 'ExpensesList' with 'props' as its parameter
  if (props.items.length === 0) {  // Check if the 'items' prop (list of expenses) is empty
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;  // Render a message when there are no expenses
  }

  return (
    <ul className='expenses-list'>  
      {props.items.map((expense) => (  // Map over the 'items' prop (list of expenses) and render each 'ExpenseItem' component
        <ExpenseItem
          key={expense.id}  // Set a unique 'key' prop for React rendering
          title={expense.title}  // Pass the 'title' prop to the 'ExpenseItem' component
          amount={expense.amount}  // Pass the 'amount' prop to the 'ExpenseItem' component
          date={expense.date}  // Pass the 'date' prop to the 'ExpenseItem' component
        />
      ))}
    </ul>
  );
};

export default ExpensesList;  // Export the 'ExpensesList' component as the default export
