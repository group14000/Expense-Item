import React from 'react';

function ExpenseItem() {
    // Define the LocationOfExpenditure variable
    const LocationOfExpenditure = "Home"; // You can change this to the actual location

    return (
        <div>
            {/* Display the LocationOfExpenditure on the screen */}
            <h2>Location of Expenditure: {LocationOfExpenditure}</h2>

            {/* List of expenses */}
            <h3>Food Rs 10</h3>
            <h3>Petrol Rs 100</h3>
            <h3>Movies Rs 200</h3>
        </div>
    );
}

export default ExpenseItem;
