import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import ReportIssue from './pages/ReportIssue';
import Dashboard from './pages/Dashboard';
import MapView from './pages/MapView';
import Analytics from './pages/Analytics';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report" element={<ReportIssue />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;