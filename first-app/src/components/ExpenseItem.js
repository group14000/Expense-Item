import React from "react";

const ExpenseItem =(props) => {
  // Define the LocationOfExpenditure variable
  const LocationOfExpenditure = "Home"; // You can change this to the actual location
  const { title, amount } = props;

  return (
    <div>
      {/* Display the LocationOfExpenditure on the screen */}
      <h2>Location of Expenditure: {LocationOfExpenditure}</h2>

      {/* List of expenses */}
      <h3>Title: {title}</h3>
      <h3>Amount: {amount}</h3>
    </div>
  );
}

export default ExpenseItem;
