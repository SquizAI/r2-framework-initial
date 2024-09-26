// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import R2FrameworkDiagram from './components/R2FrameworkDiagram';
import About from './components/About';
import Applications from './components/Applications';
import TheoreticalFoundations from './components/TheoreticalFoundations';
import MathematicalFormulation from './components/MathematicalFormulation';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen flex flex-col">
        {/* Header */}
        <header className="py-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <h1 className="text-4xl font-bold text-center">
            AI in Relative Reality (R²) Framework
          </h1>
          <p className="mt-2 text-center text-lg">
            Integrating Symbolic Reasoning, Game Theory, and Quantum Computing for Advanced Multi-Agent Systems
          </p>
          {/* Navigation */}
          <nav className="mt-4 flex justify-center space-x-6">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/theoretical-foundations" className="hover:underline">Theoretical Foundations</Link>
            <Link to="/mathematical-formulation" className="hover:underline">Mathematical Formulation</Link>
            <Link to="/applications" className="hover:underline">Applications</Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/theoretical-foundations" element={<TheoreticalFoundations />} />
            <Route path="/mathematical-formulation" element={<MathematicalFormulation />} />
            <Route path="/applications" element={<Applications />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>

        {/* Footer */}
        <footer className="py-4 bg-gray-800 text-white text-center">
          <p>&copy; 2024 Matty S. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" aria-label="LinkedIn">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
