import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    const usernameValid = validateUsername();
    const passwordValid = validatePassword();

    if (usernameValid && passwordValid) {
      onLogin();
    }
  };

  const validateUsername = () => {
    if (!username) {
      setUsernameError('Please enter your username.');
      return false;
    }
    setUsernameError('');
    return true;
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError('Please enter your password.');
      return false;
    }
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[A-Z]).*$/;

    if (!passwordRegex.test(password)) {
      setPasswordError(
        'Password must contain at least one special character, one numeric value, and one capital letter.'
      );
      return false;
    }

    setPasswordError('');
    return true;
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              validateUsername();
            }}
          />
          <div className="error-message">{usernameError}</div>
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword();
            }}
          />
          <div className="error-message">{passwordError}</div>
        </label>
        <button type="button" onClick={handleLogin} disabled={!username || !password}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
