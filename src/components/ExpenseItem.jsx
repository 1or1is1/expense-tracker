import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (prop) => {
    const expenseDate = prop.date;
    const expenseTitle = prop.title;
    const expenseAmount = prop.amount;

    return (
        <div className='expense-item'>
            <ExpenseDate date={expenseDate}/>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;