import './Button.css'

function Button(props) {
    const buttonText=props.text;
    const onClickButton =()=>{
      props.buttonClicked();
    }
  return (
    <div className="expense-button-div">
      <button className='expense-button' onClick={onClickButton}>{buttonText}</button>
    </div>
  );
}
export default Button;
