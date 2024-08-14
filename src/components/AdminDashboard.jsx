import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [selectedSection, setSelectedSection] = useState('Overview');
  const [users, setUsers] = useState([]);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    if (section === 'Manage Users') {
      fetchLoggedInUsers();
    }
  };

  const fetchLoggedInUsers = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/loggedin-users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching logged-in users:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <nav>
          <ul>
            <li onClick={() => handleSectionClick('Manage Users')}>
              <img src="https://www.loginradius.com/blog/static/3d1a7f9993b6334444b52ae84a06f852/d3746/user-mngmnt.jpg" alt="Manage Users" />
              Manage Users
            </li>
            <li onClick={() => handleSectionClick('Overview')}>
              <img src="https://www.shutterstock.com/image-photo/overview-written-on-chalkboard-260nw-375788848.jpg" alt="Overview" />
              Overview
            </li>
            <li onClick={() => handleSectionClick('Reports')}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKkUJrWteUTaGp_o1FwNBy1XG02oC5QaVvYQ&s" alt="Reports" />
              Reports
            </li>
            <li onClick={() => handleSectionClick('Settings')}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpLYKM6LhOASQ3_-FYlDlRO2pJYAf1qxDXCQ&s" alt="Settings" />
              Settings
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <h1>{selectedSection} Section</h1>
        {selectedSection === 'Manage Users' && (
          <div className="users-section">
            <h2>List of Logged-In Users</h2>
            <ul>
              {users.map(user => (
                <li key={user.id}>
                  <p>Name: {user.email}</p>
                  <p>Email: {user.email}</p>
                  <p>Last Login Time: {user.lastLoginTime}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Other sections like Overview, Reports, Settings can be conditionally rendered here */}
      </main>
    </div>
  );
};

export default AdminDashboard;
