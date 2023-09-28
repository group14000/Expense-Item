import React, { useState } from 'react';
import ExpenseItem from './components/ExpenseItem';

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Food', amount: 10, location: 'Home' },
    { id: 2, description: 'Petrol', amount: 100, location: 'Gas Station' },
    { id: 3, description: 'Movies', amount: 200, location: 'Cinema' },
    // Add more expenses as needed
  ]);

  const handleDeleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  return (
    <div>
      <h1>Expense Items</h1>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          description={expense.description}
          amount={expense.amount}
          location={expense.location}
          onDelete={handleDeleteExpense}
        />
      ))}
    </div>
  );
};

export default App;
