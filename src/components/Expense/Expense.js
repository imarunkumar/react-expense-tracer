import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

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
    <li className="expense_list">
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onFilterYear={onFilterYearHander}
      />
      {/* <Chart expenseItem={filterExpense}></Chart> */}
      <ExpenseChart expenses={filterExpense}/>
      <ExpenseList expenseItem={filterExpense}/>
    </Card>
    </li>
  );
}
export default Expense;
