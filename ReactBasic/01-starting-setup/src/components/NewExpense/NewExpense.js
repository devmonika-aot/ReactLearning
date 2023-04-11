

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
function NewExpense(props){

    const newExpenseDataHandle= (Expensedata)=>{
        const newexpense ={
            ...Expensedata,
            id:Math.random().toString
        }
       const temp=Expensedata;
        console.log(newexpense)
        console.log(temp)
        props.onSaveExpensesApp(temp);
    }
    
    return (
        <ExpenseForm onsaveExpenseData={newExpenseDataHandle}/>
    )

}

export default NewExpense;