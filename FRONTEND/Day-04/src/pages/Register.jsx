import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Register.css';

function Register({ onSwitchView }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  const handleSubmit = async (e) => {
    e.preventDefault();

    // **IMPORTANT:** Implement secure registration logic here!
    // - Validate user input on both frontend and backend
    // - Hash password before sending (use a library like bcrypt)

    try {
      // Validate email format (basic check)
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(String(email).toLowerCase())) {
        setErrorMessage('Invalid email format');
        return;
      }

      // Validate password strength (basic check)
      if (password.length < 8) {
        setErrorMessage('Password must be at least 8 characters long');
        return;
      }

      const hashedPassword = await hashPassword(password); // Replace with secure hashing

      const response = await axios.post('/api/register', { username, email, hashedPassword });
      // Handle successful registration (e.g., display success message, redirect to login)
      console.log('Registration successful:', response.data);
      setUsername('');
      setEmail('');
      setPassword('');
      setErrorMessage(''); // Clear error message on success
    } catch (error) {
      console.error('Registration error:', error);
      setErrorMessage('Registration failed'); // Generic error message for now
    }
  };

  // **Placeholder for secure password hashing:**
  const hashPassword = async (password) => {
    // Replace with actual hashing implementation using a library like bcrypt
    return password; // This is not secure, replace it!
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
      <button type="submit">Register</button>
      <p>
        Already have an account?{' '}
        <button type="button" onClick={onSwitchView}>
          Login
        </button>
      </p>
    </form>
  );
}

export default Register;
