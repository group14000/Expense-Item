import React from 'react';
import ExpenseItem from './components/ExpenseItem';

function App() {
    // Create an array of expenses
    const expenses = [
        { id: 1, description: 'Food', amount: 10, location: 'Home' },
        { id: 2, description: 'Petrol', amount: 100, location: 'Gas Station' },
        { id: 3, description: 'Movies', amount: 200, location: 'Cinema' },
        // Add more expenses as needed
    ];

    return (
        <div>
            <h1>Expense Items</h1>
            {/* Map through the expenses array and create ExpenseItem components */}
            {expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    description={expense.description}
                    amount={expense.amount}
                    location={expense.location}
                />
            ))}
        </div>
    );
}

export default App;
