import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
    let [showExpenseForm, setShowExpenseForm] = useState(false);

    const addNewExpenseHandler = () => {
        setShowExpenseForm(prevVal => showExpenseForm = !prevVal);
    }

    const addExpenseHandler = (data) => {
        const payload = {
            id: Math.random().toFixed(2) * 100,
            ...data,
        }
        props.onAddNewExpense(payload);
    }

    return (
        <div className='new-expense'>
            {showExpenseForm 
            ? <ExpenseForm onAddExpense={addExpenseHandler} onCancelButton={addNewExpenseHandler} /> 
            : <button type='button' onClick={addNewExpenseHandler}>Add New Expense</button>}
        </div>
    );
}

export default NewExpense;