import "./App.css";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenseDataRaw = [
    {
      _id: "01",
      expenseItem: "Clothings",
      expensePrice: 4211,
      expenseDate:new Date(2022, 10, 18)
    },
    {
      _id: "02",
      expenseItem: "Travelings",
      expensePrice: 253,
      expenseDate:new Date(2022, 1, 14)
    },
    {
      _id: "03",
      expenseItem: "Food",
      expensePrice: 1200,
      expenseDate:new Date(2022, 10, 11)
    },
  ];

  return (
    <div>
      <h1 >Expense Tracer</h1>
      <NewExpense/>
      <Expense expenseData={expenseDataRaw}/>
    </div>
  );
}

export default App;
