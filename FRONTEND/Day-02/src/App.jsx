import React, { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [isLoginView, setIsLoginView] = useState(true);

  const handleViewChange = () => {
    setIsLoginView(!isLoginView);
  };

  return (
    <div className="auth-container">
      {isLoginView ? <Login onSwitchView={handleViewChange} /> : <Register onSwitchView={handleViewChange} />}
      <button onClick={handleViewChange} className="switch-view-btn">
        {isLoginView ? 'Switch to Register' : 'Switch to Login'}
      </button>
    </div>
  );
}

export default App;
