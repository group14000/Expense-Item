import React from 'react';  // Import React library for creating React components

import ExpenseDate from './ExpenseDate';  // Import the 'ExpenseDate' component
import Card from '../UI/Card';  // Import the 'Card' component for styling
import './ExpenseItem.css';  // Import a CSS file for additional styling

const ExpenseItem = (props) => {  // Define a functional component called 'ExpenseItem' with 'props' as its parameter
  return (
    <li> 
      <Card className='expense-item'>  
        <ExpenseDate date={props.date} />  
        <div className='expense-item__description'>  
          <h2>{props.title}</h2>  
          <div className='expense-item__price'>${props.amount}</div>  
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;  // Export the 'ExpenseItem' component as the default export
