import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const addExpenseHandler = (data) => {
        const payload = {
            id: Math.random().toFixed(2)*100,
            ...data,
        }
        props.onAddNewExpense(payload);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onAddExpense={addExpenseHandler} />
        </div>
    );
}

export default NewExpense;