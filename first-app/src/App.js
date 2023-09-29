// Import the necessary React library function
import React from 'react';

// Import the Expenses component
import Expenses from './components/Expenses/Expenses';

// Define the App functional component
const App = () => {
  // Define an array of expense objects
  const expenses = [
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

  // Return JSX for rendering the App component
  return (
    <div>
      {/* Render an h2 element with the text "Let's get started!" */}
      <h2>Let's get started!</h2>

      {/* Render the Expenses component and pass the 'expenses' array as a prop */}
      <Expenses items={expenses} />
    </div>
  );
}

// Export the App component as the default export
export default App;
