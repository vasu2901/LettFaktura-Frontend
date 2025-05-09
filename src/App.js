import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TermsPage from './pages/TermsPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
