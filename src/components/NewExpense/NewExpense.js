import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
    const addExpenseHandler = (expensesData) => {
        props.onAddExpense(expensesData);
    };
  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={addExpenseHandler}/>
    </div>
  );
}

export default NewExpense;
