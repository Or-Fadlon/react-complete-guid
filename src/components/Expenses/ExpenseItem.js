import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"

function ExpenseItem(props) {
const changeTitleHandler = () => {console.log("change title clicked!")}

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date ?? new Date(0, 0, 0)} />
      <div className="expense-item__description">
        <h2>{props.title ?? "no name"}</h2>
        <div className="expense-item__price">{props.amount ?? -1}$</div>
      </div>
      <button onClick={changeTitleHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
