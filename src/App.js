import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RateCalculator from './pages/RateCalculator';
import FormSubmission from './pages/FormSubmission';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rate-calculator" element={<RateCalculator />} />
          <Route path="/form-submission" element={<FormSubmission />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
