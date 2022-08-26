import Card from '../UI/Card';
import './ExpenseDate.css'

function ExpenseDate(props) {
  
 let  expenseDate = props.expenseDate;
  if(!expenseDate){
    expenseDate=new Date();
  }
  return (
    <Card className="expense-date">
      <div className="expense-date__month">{new Date(expenseDate).toLocaleDateString("en", { month: "long" })}</div>
      <div className="expense-date__day">{new Date(expenseDate).toLocaleDateString("en", { day: "numeric" })}</div>
      <div className="expense-date__year">{new Date(expenseDate).toLocaleDateString("en", { year: "numeric" })}</div>
    </Card>
  );
}

export default ExpenseDate;
