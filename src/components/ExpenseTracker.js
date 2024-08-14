import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import 'jspdf-autotable';
import './ExpenseTracker.css';
import Footer from './Footer';
import OurServices from './OurServices';

// Register the necessary components
ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const categories = ['Food', 'Transport', 'Utilities', 'Entertainment', 'Health', 'Other'];

const ExpenseTracker = () => {
  const [income, setIncome] = useState('');
  const [monthlyBudget, setMonthlyBudget] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [dailyLimit, setDailyLimit] = useState('');
  const [category, setCategory] = useState('');
  const [budgetExceeded, setBudgetExceeded] = useState(false);

  // Fetch all transactions from backend
  useEffect(() => {
    axios.get('http://localhost:8080/api/transactions')
      .then(response => {
        setExpenses(response.data);
      })
      .catch(error => {
        console.error('Error fetching transactions:', error);
      });
  }, []);

  // Function to handle adding income
  const handleAddIncome = () => {
    if (income) {
      alert(`Income of ${income} added successfully!`);
    } else {
      alert('Please enter a valid income amount.');
    }
  };

  const handleAddExpense = () => {
    const newExpense = { name: expenseName, date: expenseDate, amount: parseInt(expenseAmount), paymentMethod, category };

    const expensesToday = expenses.filter(expense => expense.date === expenseDate).reduce((acc, expense) => acc + expense.amount, 0);
    const totalExpensesWithNew = expenses.reduce((acc, expense) => acc + expense.amount, 0) + newExpense.amount;

    if (expensesToday + newExpense.amount > dailyLimit) {
      alert('Expense limit for the day exceeded!');
    }

    if (totalExpensesWithNew > monthlyBudget) {
      setBudgetExceeded(true);
    } else {
      setBudgetExceeded(false);
    }

    // Post new expense to backend
    axios.post('http://localhost:8080/api/transactions', newExpense)
      .then(response => {
        setExpenses([...expenses, response.data]);
      })
      .catch(error => {
        console.error('Error adding transaction:', error);
      });

    setExpenseName('');
    setExpenseDate('');
    setExpenseAmount('');
    setPaymentMethod('');
    setCategory('');
  };

  const handleDeleteExpense = (id) => {
    // Delete expense from backend
    axios.delete(`http://localhost:8080/api/transactions/${id}`)
      .then(() => {
        setExpenses(expenses.filter(expense => expense.id !== id));
      })
      .catch(error => {
        console.error('Error deleting transaction:', error);
      });
  };

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const balance = income - totalExpenses;
  const remainingBudget = monthlyBudget - totalExpenses;

  const pieData = {
    labels: expenses.map((expense) => expense.name),
    datasets: [
      {
        data: expenses.map((expense) => expense.amount),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
      },
    ],
  };

  const barData = {
    labels: expenses.map((expense) => expense.date),
    datasets: [
      {
        label: 'Expenses',
        data: expenses.map((expense) => expense.amount),
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const handleExportPdf = () => {
    const doc = new jsPDF('p', 'mm', 'a4');

    doc.text('Expense Tracker Report', 10, 10);
    doc.text(`Income: ${income}`, 10, 20);
    doc.text(`Total Expenses: ${totalExpenses}`, 10, 30);
    doc.text(`Balance: ${balance}`, 10, 40);
    doc.text(`Remaining Budget: ${remainingBudget}`, 10, 50);

    doc.autoTable({
      startY: 60,
      head: [['Name', 'Date', 'Amount', 'Payment Method', 'Category']],
      body: expenses.map(expense => [expense.name, expense.date, expense.amount, expense.paymentMethod, expense.category]),
    });

    html2canvas(document.querySelector('.charts')).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      doc.addImage(imgData, 'PNG', 10, doc.autoTable.previous.finalY + 10, 180, 80);
      doc.save('expense-tracker-report.pdf');
    });
  };

  return (
    <div className="expense-tracker">
      <div className="main-container">
        <div className="income-section">
          <center><h1 className="fontz">Expense Tracker App</h1></center>
          <div className="income-container">
            <div className="income-inputs">
              <label><b>Income:</b></label>
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="in-come"
                placeholder="Enter Your Income"
              />
              <button onClick={handleAddIncome} className="addInc">ADD</button>
            </div>
          </div>
          <div className="monthly-budget-container">
            <label><b>Monthly Budget:</b></label>
            <input
              type="number"
              value={monthlyBudget}
              onChange={(e) => setMonthlyBudget(e.target.value)}
              className="monthly-budget"
              placeholder="Set Your Monthly Budget"
            />
          </div>
          {budgetExceeded && (
            <div className="notification">
            <center>
              <p><b>Monthly Budget Limit Exceeded!</b></p>
              </center>
            </div>
          )}
        </div>

        <div className="expense-input-section">
          <div className="expense-container">
            <div className="expense-inputs">
              <div className="daily-limit-inputs">
                <label><b>Daily Limit:</b></label>
                <input
                  type="number"
                  value={dailyLimit}
                  onChange={(e) => setDailyLimit(e.target.value)}
                  className=""
                  placeholder="Set Your Daily Limit"
                />
              </div>
              <div className="nameDiv">
                <label><b>Name:</b></label>
                <input
                  type="text"
                  value={expenseName}
                  onChange={(e) => setExpenseName(e.target.value)}
                  className="expname"
                  placeholder="Where was the expense made?"
                />
              </div>
              <div className="dateAmt">
                <label><b>Date:</b></label>
                <input
                  type="date"
                  value={expenseDate}
                  onChange={(e) => setExpenseDate(e.target.value)}
                  className="e-date"
                />
                <br />
                <label><b>Amount:</b></label>
                <input
                  type="number"
                  value={expenseAmount}
                  onChange={(e) => setExpenseAmount(e.target.value)}
                  className="amount"
                  placeholder="Enter Amount"
                />
                <br />
                <label><b>Payment Method:</b></label>
                <select 
                  value={paymentMethod} 
                  onChange={(e) => setPaymentMethod(e.target.value)} 
                  className="payment-method"
                >
                  <option value="">Select Payment Method</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                  <option value="No payment">No payment</option>
                  <option value="others">others</option>
                </select>
                <br />
                <label><b>Category:</b></label>
                <select 
                  value={category} 
                  onChange={(e) => setCategory(e.target.value)} 
                  className="category-input-field"
                >
                  <option value="">Select Category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div className="buttons-container">
                <button onClick={handleAddExpense} className="add-btn">ADD EXPENSES</button>
                <button onClick={handleExportPdf} className="exp-btn">EXPORT AS PDF</button>
              </div>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="pie-chart">
            <Pie data={pieData} />
          </div>
          <div className="bar-chart">
            <Bar data={barData} />
          </div>
        </div>

        <div className="expense-list-section">
          <h3>Expense List</h3>
          <table className="expense-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.name}</td>
                  <td>{expense.date}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.paymentMethod}</td>
                  <td>{expense.category}</td>
                  <td>
                    <button onClick={() => handleDeleteExpense(expense.id)} className="delete-btn">DELETE</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <OurServices />
      </div>

      <Footer />
    </div>
  );
};

export default ExpenseTracker;
