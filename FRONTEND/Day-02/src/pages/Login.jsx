import React, { useState } from 'react';
import axios from 'axios';

function Login({ onSwitchView }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Implement secure login logic here (e.g., hash password before sending)
    try {
      const response = await axios.post('/api/login', { username, password });
      // Handle successful login (e.g., redirect to protected area)
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login error:', error);
      // Handle login errors (e.g., display error message)
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      <p>
        Don't have an account?{' '}
        <button type="button" onClick={onSwitchView}>
          Register
        </button>
      </p>
    </form>
  );
}

export default Login;
