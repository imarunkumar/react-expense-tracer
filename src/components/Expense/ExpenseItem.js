import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [expenseItem, setExpenseItem]=useState(props.expenseItem);


  // let expenseItem = props.expenseItem;
  const expensePrice = props.expensePrice;
  const expenseDate = props.expenseDate;
  
  const clickHandler = () => {
    setExpenseItem("updated")
    console.log(expenseItem);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseItem}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
      <button onClick={clickHandler}> Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
