import React from 'react';

const ExpenseItem = (props) => {
  const { id, description, amount, location, onDelete } = props;

  const handleDeleteExpense = () => {
    onDelete(id);
  };

  return (
    <div>
      <h2>Location of Expenditure: {location}</h2>
      <h3>Title: {description}</h3>
      <h3>Amount: {amount}</h3>
      <button onClick={handleDeleteExpense}>Delete Expense</button>
    </div>
  );
};

export default ExpenseItem;
