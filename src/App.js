import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Cashifygcmart
          </h1>
          <p className="text-xl mb-8">
            Sell Your Unused Gift Cards for Same-Day Cash Online
          </p>
          <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </header>
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8">Your Backend is Ready!</h2>
          <p className="text-lg text-gray-600">
            Backend API: https://cashifygcmart-backend-production.up.railway.app
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
