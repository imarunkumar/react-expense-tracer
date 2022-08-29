import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const saveDataHandler =(enteredData)=>{
    let saveEnteredData= {
      ...enteredData,
      _id:Math.random()
    }
    props.onSaveData(saveEnteredData);
    // console.log(saveEnteredData);
  }

  const [displayForm,setDisplayForm]=useState(false)
  const diplayFormHandler=()=>{
    setDisplayForm(!displayForm);
  }
  return (
    <div className="new-expense">
      {
        displayForm?<ExpenseForm onSaveEnteredData={saveDataHandler} diplayFormHandler={diplayFormHandler} />:   <button onClick={diplayFormHandler}>Add New Expense</button>
      }
      
   
    </div>
  );
}
export default NewExpense;
