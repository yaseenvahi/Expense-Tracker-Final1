// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
// import './Navbar.css';
// // Import Font Awesome CSS
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const Navbar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Clear any stored user authentication data (e.g., tokens)
//     localStorage.removeItem('authToken'); // Example for token storage
//     // Redirect to login page after logout
//     navigate('/Auth');
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo-title">
//         <img 
//           src="https://previews.123rf.com/images/in8finity/in8finity1405/in8finity140500127/28294504-euro-money-icon-with-bag-on-black-background-vector-illustration.jpg" 
//           alt="Logo" 
//           className="logo" 
//         />
//         <h1 className="title">Expense Tracker</h1>
//       </div>
//       <div className="nav-links">
//         <Link to="/">
//           <i className="fas fa-home"></i> Home
//         </Link>
//         <Link to="/about">
//           <i className="fas fa-info-circle"></i> About Us
//         </Link>
//         <Link to="/contact">
//           <i className="fas fa-envelope"></i> Contact
//         </Link>
//         <Link to="/login">
//           <i className="fas fa-sign-in-alt"></i> Login
//         </Link>
//         <Link to="/login">
//           <i className="fas fa-sign-in-alt"></i> Logout
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <nav className="navbar">
      <div className="logo-title">
        <img 
          src="https://previews.123rf.com/images/in8finity/in8finity1405/in8finity140500127/28294504-euro-money-icon-with-bag-on-black-background-vector-illustration.jpg" 
          alt="Logo" 
          className="logo" 
        />
        <h1 className="title">Expense Tracker</h1>
      </div>
      <div className="nav-links">
        <Link to="/">
          <i className="fas fa-home"></i> Home
        </Link>
        <Link to="/about">
          <i className="fas fa-info-circle"></i> About Us
        </Link>
        <Link to="/contact">
          <i className="fas fa-envelope"></i> Contact
        </Link>
        <Link to="/login">
          <i className="fas fa-sign-in-alt"></i> Login
        </Link>
        <Link to="/admin">
          <i className="fas fa-user-shield"></i> Admin
        </Link>
        <button className="logout-button" onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
