import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { date: new Date(2021, 2, 30), title: "Car Insurence", amount: 250.5 },
    { date: new Date(2021, 12, 30), title: "Car", amount: 45 },
    { date: new Date(2021, 2, 24), title: "Computer", amount: 55.5 },
    { date: new Date(2021, 5, 11), title: "Pop", amount: 78.58 },
    { date: new Date(2021, 7, 1), title: "Movie", amount: 58.5 },
  ];

  const addExpenseHandler = (expenseData) => {
    console.log(expenseData);
  };

  return (
    <div className="App">
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
