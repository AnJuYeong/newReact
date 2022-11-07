import React, { useState } from 'react'
import "./Expenses.css"
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
  const [filterY,setFilterY] = useState("2020");

  const filterChangeHandler = selectedYear => {
    setFilterY(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return  expense.date.getFullYear().toString() === filterY;
  })

  return (
    <div>
    <Card className='expenses'>
      <ExpenseFilter 
      onChangeFilter = {filterChangeHandler} 
      selected = {filterY}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items = {filteredExpenses} />
    </Card>
    </div>
  )
}

export default Expenses