import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [newAddedTitle, setTitleHandler] = useState("");
  const [newAddedamount, setAmountHandler] = useState("");
  const [newAddeddate, setDateHandler] = useState("");

  const titleChangeHandler = (event) => {

    setTitleHandler(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmountHandler(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDateHandler(event.target.value);
  };
  const submitHandler = (event) => {
    // By default, we have button of type  submit  in our form then once we click on submit
    // It will refresh the page, here we are preventing this functionality.
    event.preventDefault();

  const expense={
    title : newAddedTitle,
    amount : newAddedamount,
    date: new Date(newAddeddate),
    
  }
  console.log(expense)
  props.onsaveExpenseData(expense)
  setAmountHandler('')
  setDateHandler('')
  setTitleHandler('')
}
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input type="text" onChange={titleChangeHandler} value={newAddedTitle}></input>
        </div>
        <div className="new-expense__control">
          <label>amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={newAddedamount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="01-01-2019"
            max="12-12-2022"
            onChange={dateChangeHandler}
            value={newAddeddate}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
