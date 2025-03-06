import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [expenses, setExpenses] = useState([]);

    const fetchData = () => {
        axios.get('http://localhost:9418/getexpense')
            .then(result => {
                console.log(result.data);
                setExpenses(result.data);
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchData();
    }, []);

    /* const editExpense = (expense) => {
        axios.put(`http://localhost:9418/editexpense/${expense.title}`, expense)
            .then(response => {
                fetchData();
            })
            .catch(err => console.error(err));
    } */

    const deleteExpense = (expense) => {
        axios.delete(`http://localhost:9418/deleteexpense/${expense.title}`)
            .then(response => {
                setExpenses(expenses.filter(e => e.id !== expense.id));
            })
            .catch(err => console.error(err));
    }

    const totalExpenseAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

    return (
        <div className='home-container'>
            <h1 className='page-title'>Expense Tracker</h1>
            <div className='table-container'>
                <table className='expense-table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {expenses.map((expense) => {
                            return (
                                <tr key={expense._id}>
                                    <td>{expense.title}</td>
                                    <td className='amount-cell'>
                                        {expense.amount !== undefined ? expense.amount.toFixed(2) : '0.00'}
                                    </td>
                                    <td>{expense.category}</td>
                                    <td className='actions-cell'>
                                        <Link to={`/editexpense/${expense.title}`} className="edit-button" style={{textDecoration: 'none'}}>Edit</Link>
                                        <button className='delete-button' onClick={() => deleteExpense(expense)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>

                </table>
            </div>

            <div className='total-container'>
                <div className='total-label'>Total Expenses: </div>
                <div className='total-amount'>${totalExpenseAmount.toFixed(2)}</div>
            </div>
        </div>
    )
}

export default Home;
