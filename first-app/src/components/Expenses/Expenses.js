import React, { useState } from 'react';  // Import React library and 'useState' hook for creating React components with state

import Card from '../UI/Card';  // Import the 'Card' component for styling
import ExpensesFilter from './ExpensesFilter';  // Import the 'ExpensesFilter' component
import ExpensesList from './ExpensesList';  // Import the 'ExpensesList' component
import ExpensesChart from './ExpensesChart';  // Import the 'ExpensesChart' component
import './Expenses.css';  // Import a CSS file for additional styling

const Expenses = (props) => {  // Define a functional component called 'Expenses' with 'props' as its parameter
  const [filteredYear, setFilteredYear] = useState('2020');  // Initialize and manage state for the selected year filter

  const filterChangeHandler = (selectedYear) => {  // Define a function to handle changes in the selected year filter
    setFilteredYear(selectedYear);  // Update the selected year state when the filter changes
  };

  const filteredExpenses = props.items.filter((expense) => {  // Filter the expenses based on the selected year
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>  
      <Card className='expenses'>  
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        /> 
        <ExpensesChart expenses={filteredExpenses} /> 
        <ExpensesList items={filteredExpenses} />  
      </Card>
    </div>
  );
};

export default Expenses;  // Export the 'Expenses' component as the default export
