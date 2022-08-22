import "./App.css";
import Expense from "./components/Expense";
import "./components/ExpenseItem";

function App() {
  const expenseDataRaw = [
    {
      _id: "01",
      expenseItem: "Clothings",
      expensePrice: 4211,
      expenseDate: new Date(),
    },
    {
      _id: "02",
      expenseItem: "Travelings",
      expensePrice: 28453,
      expenseDate: new Date(),
    },
    {
      _id: "03",
      expenseItem: "Food",
      expensePrice: 1200,
      expenseDate: new Date(),
    },
  ];

  return (
    <div>
      <h1>ReactJS App</h1>
      <Expense expenseData={expenseDataRaw}/>
    </div>
  );
}

export default App;
