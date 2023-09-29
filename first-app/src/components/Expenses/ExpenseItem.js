// Import the necessary React library functions and components
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

// Define the ExpenseItem functional component that takes 'props' as an argument
const ExpenseItem = (props) => {
  // Define a state variable 'title' and a function 'setTitle' to manage it
  const [title, setTitle] = useState(props.title);

  // Log a message to the console when the component is evaluated by React
  console.log('ExpenseItem evaluated by React');
  
  // Define a click event handler that updates the 'title' state to '100$'
  const clickHandler = () => {
    setTitle('100$'); // Change the title to '100$'
  };

  // Return JSX for rendering the ExpenseItem component
  return (
    <Card className='expense-item'>
      {/* Render the ExpenseDate component and pass the 'date' prop */}
      <ExpenseDate date={props.date} />

      <div className='expense-item__description'>
        <h2>{title}</h2> {/* Display the 'title' state */}
        <div className='expense-item__price'>${props.amount}</div> {/* Display the 'amount' prop */}
      </div>

      {/* Render a button with a click event handler */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

// Export the ExpenseItem component as the default export
export default ExpenseItem;
