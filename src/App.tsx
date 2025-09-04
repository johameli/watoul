import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Network from './pages/Network';
import Jobs from './pages/Jobs';
import Messages from './pages/Messages';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUser({
      name: 'María García',
      title: 'Artista Digital & Ilustradora',
      location: 'Barcelona, España',
      connections: 234,
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400'
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header 
          isLoggedIn={isLoggedIn} 
          user={user} 
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
        <main>
          <Routes>
            <Route 
              path="/" 
              element={
                isLoggedIn ? 
                <Dashboard user={user} /> : 
                <LandingPage onLogin={handleLogin} />
              } 
            />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/network" element={<Network />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;