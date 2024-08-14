// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import LoginPage from './components/Login.jsx';
// import ExpenseTracker from './components/ExpenseTracker';
// import About from './components/About';
// import Contact from './components/Contact';
// import Navbar from './components/Navbar';
// import PrivacyPolicy from './components/PrivacyPolicy';
// import VideoPage from './components/VideoPage';
// import Subscription from './components/Subscription';
// import Register from './components/Register.jsx';

// const AppContent = () => {
//   const location = useLocation();
//   const noNavbarRoutes = ['/login', '/register']; // Define routes without the Navbar

//   return (
//     <>
//       {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
//       <Routes>
//         <Route path="/" element={<ExpenseTracker />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//         <Route path="/new" element={<VideoPage />} />
//         <Route path="/subscription" element={<Subscription />} />

//       </Routes>
//     </>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from './components/Login.jsx';
import ExpenseTracker from './components/ExpenseTracker';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import PrivacyPolicy from './components/PrivacyPolicy';
import VideoPage from './components/VideoPage';
import Subscription from './components/Subscription';
import Register from './components/Register.jsx';
import AdminDashboard from './components/AdminDashboard'; // Import AdminDashboard

const AppContent = () => {
  const location = useLocation();
  const noNavbarRoutes = ['/login', '/register']; // Define routes without the Navbar

  return (
    <>
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<ExpenseTracker />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/new" element={<VideoPage />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/admin" element={<AdminDashboard />} /> {/* Admin Dashboard Route */}
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
