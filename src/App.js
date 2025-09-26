import React from 'react';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #ec4899, #8b5cf6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div>
        <h1 style={{fontSize: '60px', fontWeight: 'bold', marginBottom: '20px'}}>
          Cashifygcmart
        </h1>
        <p style={{fontSize: '24px', marginBottom: '30px'}}>
          Sell Unused Gift Cards for Same-Day Cash Online
        </p>
        <button style={{
          backgroundColor: 'white',
          color: '#ec4899',
          padding: '15px 30px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
