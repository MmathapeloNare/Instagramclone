import React from 'react';
import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import Home from './Components/HomePage/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './Components/ProfilePage/ProfilePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
  <Route exact path="/" element={<LoginPage />} />
  <Route path="/home" element={<Home />} />
  <Route path="/homepage" element={<Home />} />
  <Route path="/profile" element={<Home page="profile" />} />
</Routes>
      </div>
    </Router>
  );
}

export default App;
