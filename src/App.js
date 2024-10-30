import React, { useState, useRef } from 'react';
import Navbar from './Navbar';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('ghibli'); // Default theme
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode toggle
  const [isSignInVisible, setIsSignInVisible] = useState(false); // Sign-In form visibility
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state
  const editableDivRef = useRef(null); // Ref for the editable div

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const toggleSignIn = () => {
    setIsSignInVisible(prevState => !prevState);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    // Here you would typically authenticate against a server
    const username = event.target.username.value;
    const password = event.target.password.value;

    // Simple authentication logic (replace with real authentication)
    if (username === "user" && password === "password") {
      setIsAuthenticated(true);
      setIsSignInVisible(false);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className={`app-container theme-${theme} ${isDarkMode ? 'theme-dark' : 'theme-light'}`}>
      <Navbar toggleDarkMode={toggleDarkMode} />

      {/* Main content accessible to all users */}
      <div
        id="note-content"
        contentEditable="true"
        placeholder="Write your note here..."
        ref={editableDivRef}
        className="note-editor"
      ></div>

      {/* Optional Sign-In Button */}
      {!isAuthenticated && (
        <button onClick={toggleSignIn}>Sign In (Optional)</button>
      )}

      {/* Sign-In Modal */}
      {isSignInVisible && (
        <div className="sign-in-modal">
          <form onSubmit={handleSignIn}>
            <h2>Sign In</h2>
            <input type="text" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Sign In</button>
            <button type="button" onClick={toggleSignIn}>Cancel</button>
          </form>
        </div>
      )}

      {/* Theme Selector */}
      <select onChange={handleThemeChange} value={theme}>
        <option value="ghibli">Ghibli Studio</option>
        <option value="pink">Pink</option>
        <option value="cyberpunk">Cyberpunk</option>
        <option value="black-white">Black and White</option>
      </select>
    </div>
  );
};

export default App;
