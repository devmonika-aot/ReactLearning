import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

import ExpensesFilter from "./NewExpense/ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filterYear = props.items.filter((expense) => {
    console.log(expense.date.getFullYear() )
    return expense.date.getFullYear() == filteredYear;
  });
  console.log(filterYear)
  let ExpenseContent=<b> NO year found </b>;
  if(filterYear.length > 0){
    console.log("hiiii")
    ExpenseContent=filterYear.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ));
  }
  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
        {ExpenseContent}
    </div>
  );
}

export default Expenses;
