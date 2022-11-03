import React, { useState } from 'react'
import "./Expenses.css"
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'

const Expenses = (props) => {
  const [filterY,setFilterY] = useState("2020");

  const filterChangeHandler = selectedYear => {
    setFilterY(selectedYear);
  }
  return (
    <div>
    <Card className='expenses'>
      <ExpenseFilter 
      onChangeFilter = {filterChangeHandler} 
      selected = {filterY}
      />
      {props.items.map((expense) => 
      ( <ExpenseItem 
        key = {expense.id}
        title = {expense.title} 
        amount = {expense.amount} 
        date = {expense.date}
        />
      ))}
    </Card>
    </div>
  )
}

export default Expenses