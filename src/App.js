import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: 0, date: new Date(2021, 7, 1), title: "Movie", amount: 58.5 },
  { id: 1, date: new Date(2021, 2, 30), title: "Car Insurence", amount: 250.5 },
  { id: 2, date: new Date(2021, 12, 30), title: "Car", amount: 45 },
  { id: 3, date: new Date(2021, 2, 24), title: "Computer", amount: 55.5 },
  { id: 4, date: new Date(2021, 5, 11), title: "Pop", amount: 78.58 },
];

function App() {
  const [expensesData, setExpensesData] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (newExpense) => {
    setExpensesData((prev) => {
      console.log(newExpense);
      console.log(prev);
      return [{ id: prev.length, ...newExpense }, ...prev];
    });
  };

  return (
    <div className="App">
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expensesData} />
    </div>
  );
}

export default App;
