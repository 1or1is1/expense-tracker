import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

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
            <ExpensesList filteredExpenses={filteredExpenses} />
        </Card>
    );
}

export default Expenses;