import React, { useState } from 'react';  // Import React library and useState hook for creating React components with state

import './ExpenseForm.css';  // Import a CSS file for additional styling

const ExpenseForm = (props) => {  // Define a functional component called 'ExpenseForm' with 'props' as its parameter
  const [enteredTitle, setEnteredTitle] = useState('');  // Define state for entered title and initialize it to an empty string
  const [enteredAmount, setEnteredAmount] = useState('');  // Define state for entered amount and initialize it to an empty string
  const [enteredDate, setEnteredDate] = useState('');  // Define state for entered date and initialize it to an empty string

  const titleChangeHandler = (event) => {  // Define a function to handle changes in the title input
    setEnteredTitle(event.target.value);  // Update the 'enteredTitle' state with the entered value
  };

  const amountChangeHandler = (event) => {  // Define a function to handle changes in the amount input
    setEnteredAmount(event.target.value);  // Update the 'enteredAmount' state with the entered value
  };

  const dateChangeHandler = (event) => {  // Define a function to handle changes in the date input
    setEnteredDate(event.target.value);  // Update the 'enteredDate' state with the entered value
  };

  const submitHandler = (event) => {  // Define a function to handle form submission
    event.preventDefault();  // Prevent the default form submission behavior

    const expenseData = {  // Create an object containing the entered expense data
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);  // Call the 'onSaveExpenseData' function from props and pass the expense data
    setEnteredTitle('');  // Clear the 'enteredTitle' state
    setEnteredAmount('');  // Clear the 'enteredAmount' state
    setEnteredDate('');  // Clear the 'enteredDate' state
  };

  return (
    <form onSubmit={submitHandler}>  
      <div className='new-expense__controls'>  
        <div className='new-expense__control'>  
          <label>Title</label>  
          <input
            type='text'
            value={enteredTitle}  // Set the input value to 'enteredTitle'
            onChange={titleChangeHandler}  // Add an 'onChange' handler for the title input
          />
        </div>
        <div className='new-expense__control'> 
          <label>Amount</label> 
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}  // Set the input value to 'enteredAmount'
            onChange={amountChangeHandler}  // Add an 'onChange' handler for the amount input
          />
        </div>
        <div className='new-expense__control'>  
          <label>Date</label>  
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}  // Set the input value to 'enteredDate'
            onChange={dateChangeHandler}  // Add an 'onChange' handler for the date input
          />
        </div>
      </div>
      <div className='new-expense__actions'>  
        <button type="button" onClick={props.onCancel}>Cancel</button>  
        <button type='submit'>Add Expense</button>  
      </div>
    </form>
  );
};

export default ExpenseForm;  // Export the 'ExpenseForm' component as the default export
