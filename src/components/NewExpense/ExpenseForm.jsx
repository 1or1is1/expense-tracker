import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandler = (event) => { setTitle(event.target.value) }
    const amountChangeHandler = (event) => { setAmount(event.target.value) }
    const dateChangeHandler = (event) => { setDate(event.target.value) }

    const submitFormHandler = (event) => {
        event.preventDefault(); // To make sure that page is not reloading after we click on submit
        const payload = {
            title: title,
            amount: amount,
            date: new Date(date)
        };
        props.onAddExpense(payload);
        // Implement 2 Way Binding by setting up the Value Property in JSX code
        setTitle('');
        setAmount('');
        setDate('');
        props.onCancelButton();
    }

    return (
        <form onSubmit={submitFormHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={amount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={date} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancelButton}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;