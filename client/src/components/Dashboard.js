import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Pie} from 'react-chartjs-2';
import {Card, CardContent, Typography} from '@mui/material';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import './Dashboard.css';


ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
    const [expenses, setExpenses] = useState([]);
    const fetchData = () => {
        axios.get('http://localhost:9418/getexpense')
        .then(result => setExpenses(result.data))
        .catch(err => console.log(err));
    }
    useEffect(() => {
        fetchData();
    }, []);
    if(expenses.length === 0){
        return <Typography>Loading...</Typography>
    }
    const normalizedExpenses = expenses.reduce((acc, item) => {
        const category = item.category.toLowerCase();
        if (acc[category]) {
            acc[category] += item.amount;
        } else {
            acc[category] = item.amount;
        }
        return acc;
    }, {});

    const labels = Object.keys(normalizedExpenses);
    const dataValues = Object.values(normalizedExpenses);

    const data = {
        labels: labels,
        datasets:[
            {
                label: 'Expenses',
                data: dataValues,
                backgroundColor: ['#ff6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0'],
                borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0'],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        return `${tooltipItem.label}: ${tooltipItem.raw}`;
                    },
                },
            },
        },
    };
    return(
        <div className='dashboard-container'>
            <Card className='expense-card'>
                <CardContent className='expense-card-content'>
                    <Typography variant='h5' className='expense-card-title'>Expense Breakdown</Typography>
                    <div className='pie-chart-container'>
                        <Pie data={data} options={options} />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Dashboard;