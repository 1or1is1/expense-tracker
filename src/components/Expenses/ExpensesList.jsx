import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (prop) => {

    let filteredExpenses = prop.filteredExpenses;
    if (filteredExpenses.length > 0) {
        return (
            <ul className='expenses-list'>
                {filteredExpenses.map(expense =>
                    <ExpenseItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount} />)}
            </ul>
        );
    }

    return (
        <h2 className='expenses-list__fallback'>No Expenses Found</h2>
    );

}

export default ExpensesList;