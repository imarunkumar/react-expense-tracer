import { useState } from "react";
// import Button from '@mui/material/Button';
import "./App.css";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const[expenseDataRaw,setExpenseDataRaw]=useState([
    {
      _id: "01",
      expenseItem: "Clothings",
      expensePrice: 4211,
      expenseDate:new Date(2021, 10, 18)
    },
    {
      _id: "02",
      expenseItem: "Travelings",
      expensePrice: 253,
      expenseDate:new Date(2020, 1, 14)
    },
    {
      _id: "03",
      expenseItem: "Food",
      expensePrice: 1200,
      expenseDate:new Date(2022, 10, 11)
    },
    {
      _id: "04",
      expenseItem: "Games",
      expensePrice: 1200,
      expenseDate:new Date(2022, 10, 11)
    },
    {
      _id: "05",
      expenseItem: "Movie",
      expensePrice: 1200,
      expenseDate:new Date(2019, 10, 11)
    },
    {
      _id: "06",
      expenseItem: "Recharge",
      expensePrice: 1200,
      expenseDate:new Date(2021, 10, 11)
    },
  ]);

 
const saveExpenseData = (addExpense)=>{
  setExpenseDataRaw((preState)=>{
    return[...preState,addExpense,];
  })
  console.log(expenseDataRaw);
}

  return (
    <div>
      <h1 >Expense Tracer</h1>
      <NewExpense onSaveData={saveExpenseData}/>
      <Expense expenseData={expenseDataRaw}/>
    </div>
  );
}
/* <Button variant="contained">Contained</Button> */

export default App;
