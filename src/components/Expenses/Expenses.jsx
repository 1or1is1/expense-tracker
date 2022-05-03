import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (prop) => {
    const expenses = prop.expenses;

    const [selectedYear, setSelectedYear] = useState('2019');
    let filteredExpenses = expenses;

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    }

    filteredExpenses = expenses.filter(expense => expense.date.getFullYear() == selectedYear);

    return (
        <Card className='expenses'>
            <ExpensesFilter onChangeYear={yearChangeHandler} selectedYear={selectedYear} />
            {filteredExpenses.map(expense =>
                <ExpenseItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount} />)}
        </Card>
    );
}

export default Expenses;