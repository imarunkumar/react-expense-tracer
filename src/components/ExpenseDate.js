import './ExpenseDate.css'

function ExpenseDate() {
 const expenseDate = new Date();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{expenseDate.toLocaleDateString("en", { month: "long" })}</div>
      <div className="expense-date__day">{expenseDate.toLocaleDateString("en", { day: "numeric" })}</div>
      <div className="expense-date__year">{expenseDate.toLocaleDateString("en", { year: "numeric" })}</div>
    </div>
  );
}

export default ExpenseDate;
