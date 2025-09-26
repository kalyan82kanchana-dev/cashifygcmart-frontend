import React from 'react';

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav style={{
        backgroundColor: 'white',
        padding: '20px',
        borderBottom: '1px solid #e5e5e5'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h2 style={{
            color: '#ec4899',
            margin: 0,
            fontSize: '24px'
          }}>
            Cashifygcmart
          </h2>
          
          <div style={{
            display: 'flex',
            gap: '30px'
          }}>
            <span style={{ color: '#374151' }}>Home</span>
            <span style={{ color: '#374151' }}>Getting Started</span>
            <span style={{ color: '#374151' }}>Accepted Gift Cards</span>
            <span style={{ color: '#374151' }}>Form Submission</span>
            <span style={{ color: '#374151' }}>Rate Calculator</span>
            <span style={{ color: '#374151' }}>FAQs</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{
        backgroundColor: '#ec4899',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white'
      }}>
        <div>
          <h1 style={{
            fontSize: '48px',
            margin: '0 0 20px 0'
          }}>
            Cashifygcmart
          </h1>
          <p style={{
            fontSize: '20px',
            margin: '0 0 30px 0'
          }}>
            Sell Unused Gift Cards for Same-Day Cash Online
          </p>
          <button style={{
            backgroundColor: 'white',
            color: '#ec4899',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold'
          }}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
