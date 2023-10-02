import React, { useState } from 'react'; // Import React library and useState hook

import NewExpense from './components/NewExpense/NewExpense'; // Import the NewExpense component
import Expenses from './components/Expenses/Expenses'; // Import the Expenses component

// Define dummy expense data as an array of objects
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => { // Define the main App component
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES); // Initialize state for expenses using the dummy data

  const addExpenseHandler = (expense) => {
    // Handler function to add a new expense to the list of expenses
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]; // Create a new array with the new expense at the beginning
    });
  };

  return (
    <div>
      {/* Render the NewExpense component and pass the addExpenseHandler function as a prop */}
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* Render the Expenses component and pass the list of expenses as a prop */}
      <Expenses items={expenses} />
    </div>
  );
};

export default App; // Export the App component as the root component of the application
