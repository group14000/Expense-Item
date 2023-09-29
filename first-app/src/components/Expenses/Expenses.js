// Import the necessary React library functions and components
import React from 'react';

// Import the ExpenseItem component
import ExpenseItem from './ExpenseItem';

// Import the Card component and CSS styles
import Card from '../UI/Card';
import './Expenses.css';

// Define the Expenses functional component that takes 'props' as an argument
const Expenses = (props) => {
  // Return JSX for rendering the Expenses component
  return (
    // Render the Card component with the class name "expenses"
    <Card className="expenses">
      {/* Render four instances of the ExpenseItem component with different props */}
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}

// Export the Expenses component as the default export
export default Expenses;
