import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './HomePage';
import SplashPage from './SplashPage';
import ErrorPage from './ErrorPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [navBarOpen, setNavBarOpen] = useState(false);

  useEffect(() => {
    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    } else {
      // Fallback to system preference
      const userPrefersDark =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(userPrefersDark);
    }
  }, []);

  function handleDarkMode() {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    console.log('darkMode');

    // Save theme preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  }

  return (
    <Router>
      <Routes>
        <Route
          path='*'
          element={
            <ErrorPage
              navBarOpen={navBarOpen}
              setNavBarOpen={setNavBarOpen}
              darkMode={darkMode}
              handleDarkMode={handleDarkMode}
            />
          }
        />
        <Route path='/' element={<SplashPage />} />
        <Route
          path='/home'
          element={
            <HomePage
              navBarOpen={navBarOpen}
              setNavBarOpen={setNavBarOpen}
              darkMode={darkMode}
              handleDarkMode={handleDarkMode}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
