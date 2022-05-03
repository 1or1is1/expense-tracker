import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INIT_EXPENSES = [
  { id: '10', date: new Date(2022, 1, 23), title: 'Laptop', amount: 1234.89 },
  { id: '11', date: new Date(2021, 2, 11), title: 'Grocery', amount: 234.9 },
  { id: '12', date: new Date(2022, 2, 21), title: 'Investment', amount: 10000 },
  { id: '13', date: new Date(2021, 3, 16), title: 'Partying', amount: 123.99 },
];

function App() {
  const [expenses, setExpenses] = useState(INIT_EXPENSES);

  const newExpenseHandler = (expense) => {
    setExpenses(prevState => [expense, ...prevState]);
  }

  return (
    <div>
      <NewExpense onAddNewExpense={newExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
