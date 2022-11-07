import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
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

function App() {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses( (prevExpenses) => {
      console.log(prevExpenses);
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items = {expenses}/>
    </div>
  );
};

export default App;
