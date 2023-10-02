import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm'; // Import the ExpenseForm component
import './NewExpense.css'; // Import the CSS styles for this component

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false); // Initialize state to manage editing mode

  // Handler function to save expense data
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // Create a new expense object with a unique id
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // Pass the new expense data to the parent component via a callback
    props.onAddExpense(expenseData);
    // Exit the editing mode
    setIsEditing(false);
  };

  // Handler function to start editing
  const startEditingHandler = () => {
    // Set the editing state to true
    setIsEditing(true);
  };

  // Handler function to stop editing
  const stopEditingHandler = () => {
    // Set the editing state to false
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {/* Conditional rendering: Show a button to start editing if not editing */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}

      {/* Conditional rendering: Show the ExpenseForm when editing */}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler} // Pass a callback to handle saved data
          onCancel={stopEditingHandler} // Pass a callback to handle canceling editing
        />
      )}
    </div>
  );
};

export default NewExpense; // Export the NewExpense component
