import React from 'react';  // Import React library for creating React components

import './ExpensesFilter.css';  // Import a CSS file for additional styling

const ExpensesFilter = (props) => {  // Define a functional component called 'ExpensesFilter' with 'props' as its parameter
  const dropdownChangeHandler = (event) => {  // Define a function to handle changes in the dropdown selection
    props.onChangeFilter(event.target.value);  // Call the 'onChangeFilter' function from props and pass the selected value
  };

  return (
    <div className='expenses-filter'>  
      <div className='expenses-filter__control'>  
        <label>Filter by year</label>  
        <select value={props.selected} onChange={dropdownChangeHandler}>  
          <option value='2022'>2022</option>  
          <option value='2021'>2021</option> 
          <option value='2020'>2020</option>  
          <option value='2019'>2019</option>  
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;  // Export the 'ExpensesFilter' component as the default export
