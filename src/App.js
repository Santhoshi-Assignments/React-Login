import React, { useState } from 'react';
import Login from './Components/Login';
import Home from './Components/Home';


const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Home />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;

