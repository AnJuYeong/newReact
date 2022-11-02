import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id : "e1",
      title : "Toilet Paper",
      amount : 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id : "e2",
      title : "Car Insurance",
      amount : 333.67,
      date: new Date(2021, 3, 30),
    },
    {
      id : "e3",
      title : "AJY",
      amount : 555.67,
      date: new Date(2021, 2, 12),
    },
    {
      id : "e4",
      title : "Car ",
      amount : 555.67,
      date: new Date(2021, 1, 1),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
