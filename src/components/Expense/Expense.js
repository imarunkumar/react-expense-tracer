import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expense(props) {

  const expenseData =props.expenseData;
  const [filterYear, setFilterYear] = useState("2021");
  const onFilterYearHander = (userFilterYear) => {
    setFilterYear(userFilterYear);
  };
  const filterExpense = expenseData.filter(
      (filterData) => new Date(filterData.expenseDate).toLocaleDateString("en", {
        year: "numeric",
      }) === filterYear
  );

  return (
    // <div>
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onFilterYear={onFilterYearHander}
      />
      {filterExpense.map((data) => (
        <ExpenseItem
          key={data._id}
          expenseItem={data.expenseItem}
          expensePrice={data.expensePrice}
          expenseDate={data.expenseDate}
        ></ExpenseItem>
      ))}
    </Card>
    // </div>
  );
}
export default Expense;
