import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ConnectorPage from './components/ConnectorPage';
import PlaybooksPage from './components/PlaybooksPage';
import LogsPage from './components/LogsPage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';  // Import the new LoginPage component

const App = () => {
  return (
    <Router>
      <div>
        <h1>SecuriTech</h1>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/connector" element={<ConnectorPage />} />
          <Route path="/playbooks" element={<PlaybooksPage />} />
          <Route path="/logs" element={<LogsPage />} />
          <Route path="/signin-signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />  {/* New route for Login page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
