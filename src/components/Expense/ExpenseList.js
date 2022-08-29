import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
function ExpenseList(props) {
  let expenseItem = props.expenseItem;

  if (expenseItem.length===0) {
    return <h2 className="expenses-list__fallback">No records found</h2>
  }

  return (
    <ul className="expenses-list" >
      {expenseItem.map((data) => (
        <ExpenseItem
          key={data._id}
          expenseItem={data.expenseItem}
          expensePrice={data.expensePrice}
          expenseDate={data.expenseDate}
        ></ExpenseItem>
      ))}
    </ul>
  );
}
export default ExpenseList;
