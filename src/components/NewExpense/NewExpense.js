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

  return (
    <div className="new-expense">
      <ExpenseForm onSaveEnteredData={saveDataHandler}/>
    </div>
  );
}
export default NewExpense;
