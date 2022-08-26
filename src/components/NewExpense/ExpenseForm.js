import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  //   const [enteredTitle, setEnteredTitle] = useState('');
  //   const [enteredAmount, setEnteredAmount] = useState('');
  //   const [enteredDate, setEnteredDate]= useState('');

  const [userInput, setUserInput] = useState({
    expenseItem: '',
    expensePrice: '',
    expenseDate: '',
  });

  const titleChangeHandler = (event) => {
    setUserInput((preState) => {
      return {
        ...preState,
        expenseItem: event.target.value,
      };
    });
    // console.log(userInput);
  };
  const amountChangeHandler = (event) => {
    setUserInput((preState) => {
      return {
        ...preState,
        expensePrice: event.target.value,
      };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((preState) => {
      return {
        ...preState,
        expenseDate: event.target.value,
      };
    });
  };

  const submitHandler = (event) =>{
    event.preventDefault();
    let newExpenseData=userInput;
    props.onSaveEnteredData(newExpenseData)
    // console.log(newExpenseData);
    setUserInput({
      expenseItem: '',
      expensePrice: '',
      expenseDate: '',
    })
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.expenseItem} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.expensePrice}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.expenseDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
