import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const expenseItem = props.expenseItem;
  const expensePrice = props.expensePrice;
  const expenseDate = props.expenseDate;

  return (
    <div className="expense-item">
      <ExpenseDate expenseDate={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseItem}</h2>
        <div className="expense-item__price">{expensePrice}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
