import React from 'react';
import './About.css';
import Footer from './Footer';

const About = () => {
  return (
    <div>
    <div className="about-container">
      <div className="about-content">
        <div className="about-intro">
          <div className="intro-text">
            <h1>About the Expense Tracker</h1>
            <p>
              Welcome to the Expense Tracker app! Our goal is to help you manage your finances efficiently and effectively. With this app, you can easily track your income and expenses, monitor your spending habits, and ensure you stay within your budget.
            </p>
          </div>
          <div className="intro-image">
            <img src="https://i.pinimg.com/originals/49/44/fd/4944fd56b523dd0a1ca27334a6005653.png" alt="Expense Tracker" />
          </div>
        </div>

        <div className="about-section">
          <div className="section-text">
            <h2>Purpose of the App</h2>
            <p>
              The Expense Tracker app is designed to simplify the process of managing your personal finances. Whether you are looking to save money, reduce debt, or simply understand your spending patterns, this app provides the tools you need to achieve your financial goals.
            </p>
          </div>
          <div className="section-image">
            <img src="https://s3b.cashify.in/gpro/uploads/2023/03/03220826/Best-Expense-Tracker-App-That-You-Must-Use-1.jpg" alt="Purpose" />
          </div>
        </div>

        <div className="about-section">
          <div className="section-text">
            <h2>Features</h2>
            <ul>
              <li>Track your income and view your total earnings</li>
              <li>Add, edit, and delete expenses with ease</li>
              <li>View a summary of your total expenses and remaining balance</li>
              <li>Organize expenses by categories</li>
              <li>Responsive design for all devices</li>
            </ul>
          </div>
          <div className="section-image">
            <img src="https://th.bing.com/th?id=OIP.6BVG7r66a19bV7dTE_x28QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Features" />
          </div>
        </div>

        <div className="about-section">
          <div className="section-text">
            <h2>Benefits</h2>
            <ul>
              <li>Gain a clear understanding of your financial situation</li>
              <li>Identify areas where you can cut costs and save money</li>
              <li>Set and achieve personal financial goals</li>
              <li>Reduce financial stress by keeping track of your spending</li>
            </ul>
          </div>
          <div className="section-image">
            <img src="https://i.ytimg.com/vi/EFANpLYe1ik/maxresdefault.jpg" alt="Benefits" />
          </div>
        </div>

        <div className="about-section">
          <div className="section-text">
            <h2>How to Use the App</h2>
            <ul>
              <li>Enter your total income in the provided input field and click "ADD".</li>
              <li>Add your expenses by entering the name, date, and amount of each expense, then click "ADD EXPENSES".</li>
              <li>View your total expenses and remaining balance at the bottom of the table.</li>
              <li>To delete an expense, click the "Delete" button next to the respective expense.</li>
            </ul>
          </div>
          <div className="section-image">
            <img src="https://img.freepik.com/free-photo/hungry-businesswoman-eating-looking-charts_23-2148515932.jpg?t=st=1722166827~exp=1722170427~hmac=f6026142ab14f5f08bbd9d3718ecb3933a786f07ecbf0bb07ab73fbd186b07c5&w=996" alt="How to Use" />
          </div>
        </div>

        <div className="about-section">
          <div className="section-text">
            <h2>Future Improvements</h2>
            <p>
              We are constantly looking to improve the Expense Tracker app. Some features we plan to add in the future include:
            </p>
            <ul>
              <li>Detailed charts and graphs to visualize your spending habits</li>
              <li>Expense categorization and filtering options</li>
              <li>Monthly and yearly expense reports</li>
              <li>Integration with bank accounts for automatic expense tracking</li>
              <li>Customizable budget planning tools</li>
            </ul>
          </div>
          <div className="section-image">
            <img src="https://img.freepik.com/free-vector/coronavirus-financial-recovery-concept_23-2148565771.jpg?ga=GA1.2.2076563905.1722162675&semt=ais_user" alt="Future Improvements" />
          </div>
        </div>

        <p>
          We hope you find this app useful and that it helps you take control of your finances. If you have any feedback or suggestions, please feel free to reach out to us.
        </p>
      </div>
    </div>
      <Footer />
      </div>
  );
};

export default About;
