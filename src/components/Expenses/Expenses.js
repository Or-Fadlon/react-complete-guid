import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";

function Expenses(props) {
  const [yearFilter, setYearFilter] = useState("All");

  const ChangeYearFilterHandler = (year) => {
    setYearFilter(year);
  };

  const filteredExpenses = props.items.filter((item) =>
    yearFilter === "All"
      ? true
      : item.date.getFullYear().toString() === yearFilter
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={yearFilter}
          onChangeYearFilter={ChangeYearFilterHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
