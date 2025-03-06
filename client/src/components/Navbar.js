import React from 'react';
import '../components/Navbar.css'

const Navbar = () => {
    return(
        <nav className='navbar'>
            <div className='navbar-left'>
                <img src='https://th.bing.com/th/id/OIP.OUZQp6V_nm6WT7ONC7P3eQAAAA?rs=1&pid=ImgDetMain' alt='ExpenseTracker' className='navbar-logo'/>
                <h2 className='navbar-title'>ExpenseTracker</h2>
            </div>

            <div className='navbar-center'>
                <ul className='navbar-links'>
                    <li className='navbar-item'>
                        <a href='/' className='navbar-link'>Home</a>
                    </li>
                    <li className='navbar-item'>
                        <a href='/addexpense' className='navbar-link'>Add Expense</a>
                    </li>
                    <li className='navbar-item'>
                        <a href='/dashboard' className='navbar-link'>Dashboard</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;