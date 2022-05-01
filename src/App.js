import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { date: new Date(2022, 1, 23), title: 'Laptop', amount: 1234.89 },
    { date: new Date(2022, 2, 11), title: 'Grocery', amount: 234.9 },
    { date: new Date(2022, 2, 21), title: 'Investment', amount: 10000 },
    { date: new Date(2022, 3, 16), title: 'Partying', amount: 123.99 },
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
