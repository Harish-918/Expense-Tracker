import React, { useState } from 'react';
import axios from 'axios';
import './AddExpense.css';
import { useNavigate } from 'react-router-dom';

const AddExpense = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post('http://localhost:9418/addexpense', { title, amount, category });
            setTitle('');
            setAmount('');
            setCategory('');
            navigate('/');
        }catch(err) {
            console.log(err);
        }
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Add Expense</h2>
            <form className='expense-form' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='title' className='form-label'>Expense Title:</label>
                    <input type='text' placeholder='Enter title' className='form-input' value={title} onChange={(e) => setTitle(e.target.value)} required/>
                </div>
                <div className='form-group'>
                    <label htmlFor='amount' className='form-label'>Expense Amount:</label>
                    <input type='number' className='form-input' placeholder='Enter Amount' value={amount} onChange={(e) => setAmount(e.target.value)} required/>
                </div>
                <label htmlFor='category' className='form-label'>Expense Label:</label>
                <select value={category} className='form-select' onChange={(e) => setCategory(e.target.value)} required>
                    <option value="" disabled>Select Category</option>
                    <option value="Loan">Loan</option>
                    <option value="Household">Household</option>
                    <option value="Travel">Travel</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Others">Others</option>
                </select>
                <button type='submit' className='submit-button'>Add Expense</button>
            </form>
        </div>
    )
}

export default AddExpense;