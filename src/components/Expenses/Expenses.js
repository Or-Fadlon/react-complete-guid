import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

function Expenses(props) {
  const [yearFilter, setYearFilter] = useState(new Date().getFullYear().toString());

  const ChangeYearFilterHandler = (year) => {
    setYearFilter(year);
  };
  var retVal = (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={yearFilter} onChangeYearFilter={ChangeYearFilterHandler} />
        <ExpenseItem
          date={props.items[0].date}
          title={props.items[0].title}
          amount={props.items[0].amount}
        />
        <ExpenseItem
          date={props.items[1].date}
          title={props.items[1].title}
          amount={props.items[1].amount}
        />
        <ExpenseItem
          date={props.items[2].date}
          title={props.items[2].title}
          amount={props.items[2].amount}
        />
      </Card>
    </div>
  );

  return retVal;
}

export default Expenses;
