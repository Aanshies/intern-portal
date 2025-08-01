// src/App.jsx

import { useState, useEffect } from 'react';
import './App.css';

// New: Dummy Login Component
const LoginPage = ({ onLogin }) => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <form onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Log In</button>
        </form>
        <p>Don't have an account? <a href="#">Sign Up</a></p>
      </div>
    </div>
  );
};


function App() {
  const [internData, setInternData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // New: State to manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Use a separate useEffect to handle data fetching only when logged in
  useEffect(() => {
    if (isLoggedIn) {
      const fetchInternData = async () => {
        try {
          const response = await fetch('https://intern-portal-backend-89bc.onrender.com/api/intern-data');

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          setInternData(data);
        } catch (e) {
          setError(e.message);
        } finally {
          setLoading(false);
        }
      };

      fetchInternData();
    }
  }, [isLoggedIn]); // Rerun this effect when isLoggedIn changes

  // Function to simulate a successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Conditional rendering: Show Login page if not logged in
  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // Rest of the existing code for the dashboard
  if (loading) {
    return <div>Loading intern data...</div>;
  }

  if (error) {
    return <div>Error: {error}. Please ensure your backend is running.</div>;
  }

  if (!internData) {
    return <div>No intern data found.</div>;
  }

  // The existing dashboard UI
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome, {internData.name}!</h1>
        <p>Your Referral Code: <span className="highlight">{internData.referralCode}</span></p>
        <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
      </header>

      <section className="dashboard-main">
        <div className="stat-card">
          <h3>Total Donations Raised</h3>
          <p className="stat-number">${internData.donationsRaised}</p>
        </div>

        <div className="rewards-section">
          <h3>Rewards & Unlockables</h3>
          <ul>
            {internData.rewards.map((reward, index) => (
              <li key={index}>{reward}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="leaderboard-section">
        <h3>Leaderboard</h3>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Donations</th>
            </tr>
          </thead>
          <tbody>
            {internData.leaderboard.map((intern) => (
              <tr key={intern.rank}>
                <td>{intern.rank}</td>
                <td>{intern.name}</td>
                <td>${intern.donations}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
