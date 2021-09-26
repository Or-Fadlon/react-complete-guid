import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

function Expenses(props) {
  const [yearFilter, setYearFilter] = useState(
    new Date().getFullYear().toString()
  );

  const ChangeYearFilterHandler = (year) => {
    setYearFilter(year);
  };
  var retVal = (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={yearFilter}
          onChangeYearFilter={ChangeYearFilterHandler}
        />
        {props.items.map((item, index) => (
          <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            amount={item.amount}
          />
        ))}
      </Card>
    </div>
  );

  return retVal;
}

export default Expenses;
