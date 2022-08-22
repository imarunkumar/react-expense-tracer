import "./Expense.css";
import ExpenseItem from "./ExpenseItem";

function Expense(props) {
    const expenseData= props.expenseData;
  return (
    <div className="expenses">
      <ExpenseItem
        expenseItem={expenseData[0].expenseItem}
        expensePrice={expenseData[0].expensePrice}
        expenseDate={expenseData[0].expenseDate}
      ></ExpenseItem>
      <ExpenseItem
        expenseItem={expenseData[1].expenseItem}
        expensePrice={expenseData[1].expensePrice}
        expenseDate={expenseData[1].expenseDate}
      ></ExpenseItem>
      <ExpenseItem
        expenseItem={expenseData[2].expenseItem}
        expensePrice={expenseData[2].expensePrice}
        expenseDate={expenseData[2].expenseDate}
      ></ExpenseItem>
    </div>
  );
}

export default Expense;
