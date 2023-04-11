import React,{useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from './Card'

function ExpenseItem(props) {
  const [title,setTitle]=useState(props.title)

  const clickHandler = () => {
    setTitle("updated");
    console.log("clicked")
    console.log(title)
  }
  return (

    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>        
      </div>
      <button onClick={clickHandler}>changeTitle</button>
    </div>
   
  );
}

export default ExpenseItem;
