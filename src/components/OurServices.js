import React from 'react';
import './OurServices.css'; // Import the CSS file

// Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faStar, faChartPie, faDollarSign, faChartLine, faUniversity } from '@fortawesome/free-solid-svg-icons';

const OurServices = () => {
  return (
    <div className="services-section">
      <h1 className="services-heading">Our Services</h1>
      <div className="services-container">
        <div className="service-card">
          <FontAwesomeIcon icon={faStar} className="service-icon" />
          <h3>4.7 out of 5 stars in the App Store</h3>
          <img src="https://tse3.mm.bing.net/th?id=OIP.KGLwoi2dhFtri5aJEa4kDQHaBm&pid=Api&P=0&h=180" alt="Star Rating" />
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faMobileAlt} className="service-icon" />
          <h3>Winner of Mobile UX Awards 2017</h3>
          <img src="https://tse4.mm.bing.net/th?id=OIP.y8ypgSqtQf8iVg0ICbQIAwHaDx&pid=Api&P=0&h=180" alt="UX Awards" />
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faChartPie} className="service-icon" />
          <h3>Featured by Apple App Store and Google Play</h3>
          <img src="https://tse1.mm.bing.net/th?id=OIP.gu4fSxb-OJw8lt_0QIdqBgHaFj&pid=Api&rs=1&c=1&qlt=95&w=139&h=104" alt="Featured Apps" />
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faDollarSign} className="service-icon" />
          <h3>Have perfect control over all your cash expenses, bank accounts, E-Wallets, and crypto wallets.</h3>
          <img src="https://tse4.mm.bing.net/th?id=OIP.tiykY21d-UPF34v6fOroegHaE7&pid=Api&P=0&h=180" alt="Financial Control" />
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faChartLine} className="service-icon" />
          <h3>Get a quick overview about your total incomes and expenses at a glance and in one place.</h3>
          <img src="https://tse1.mm.bing.net/th?id=OIP.xHdKujh8THbfgA6Sl0yiigHaFv&pid=Api&P=0&h=180" alt="Overview" />
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faUniversity} className="service-icon" />
          <h3>Use our smart budgets to save money for a new car, dreamy vacation, or top university.</h3>
          <img src="https://tse2.mm.bing.net/th?id=OIP.VQpLHFqVlqiJvHERoJFdkwHaGc&pid=Api&P=0&h=180" alt="Smart Budgets" />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
