import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import ChildDetails from './components/ChildDetails';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    try {
      return localStorage.getItem('isLoggedIn') === 'true';
    } catch {
      return false;
    }
  });

  const handleLogin = (method: string) => {
    console.log(`Logging in with ${method}`);
    setIsLoggedIn(true);
    try {
      localStorage.setItem('isLoggedIn', 'true');
    } catch (error) {
      console.error('Error saving login state:', error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    try {
      localStorage.removeItem('isLoggedIn');
    } catch (error) {
      console.error('Error removing login state:', error);
    }
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-200">
          <Routes>
            <Route 
              path="/" 
              element={
                !isLoggedIn ? (
                  <LoginPage onLogin={handleLogin} />
                ) : (
                  <Navigate to="/dashboard" replace />
                )
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                isLoggedIn ? (
                  <Dashboard onLogout={handleLogout} />
                ) : (
                  <Navigate to="/" replace />
                )
              } 
            />
            <Route 
              path="/child/:id" 
              element={
                isLoggedIn ? (
                  <ChildDetails />
                ) : (
                  <Navigate to="/" replace />
                )
              } 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;