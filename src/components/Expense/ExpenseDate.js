import Card from '../UI/Card';
import './ExpenseDate.css'

function ExpenseDate(props) {
 const expenseDate = props.expenseDate;

  return (
    <Card className="expense-date">
      <div className="expense-date__month">{expenseDate.toLocaleDateString("en", { month: "long" })}</div>
      <div className="expense-date__day">{expenseDate.toLocaleDateString("en", { day: "numeric" })}</div>
      <div className="expense-date__year">{expenseDate.toLocaleDateString("en", { year: "numeric" })}</div>
    </Card>
  );
}

export default ExpenseDate;
