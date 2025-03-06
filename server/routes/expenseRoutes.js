const express = require('express');
const Expense = require('../model/expense');

const router = express.Router();

router.post('/addexpense', (req, res) => {
    Expense.create(req.body)
    .then(expense => res.json(expense))
    .catch(err => res.json(err))
});


router.get('/getexpense', (req, res) => {
    Expense.find({})
    .then(expense => res.json(expense))
    .catch(err => res.json(err))
});

router.put('/editexpense/:title', (req, res) => {
    const expenseTitle = req.params.title;
    Expense.findOneAndUpdate({title: expenseTitle}, req.body, {new: true})
    .then(expense => res.json(expense))
    .catch(err => res.json(err))
});

router.delete('/deleteexpense/:title', (req, res) => {
    const expenseTitle = req.params.title;
    Expense.findOneAndDelete({title: expenseTitle})
    .then(expense => res.json(expense))
    .catch(err => res.json(err))
})

module.exports = router;