import React from 'react';

// Navigation Component
const Navigation = () => (
  <nav style={{
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  }}>
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '70px'
    }}>
      {/* Logo */}
      <div style={{
        fontSize: '24px',
        fontWeight: 'bold',
        background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        Cashifygcmart
      </div>
      
      {/* Navigation Menu */}
      <div style={{
        display: 'flex',
        gap: '30px',
        alignItems: 'center'
      }}>
        <a href="/" style={{
          color: '#374151',
          textDecoration: 'none',
          fontWeight: '500',
          transition: 'color 0.3s'
        }}>
          Home
        </a>
        <a href="/getting-started" style={{
          color: '#374151',
          textDecoration: 'none',
          fontWeight: '500'
        }}>
          Getting Started
        </a>
        <a href="/accepted-cards" style={{
          color: '#374151',
          textDecoration: 'none',
          fontWeight: '500'
        }}>
          Accepted Gift Cards
        </a>
        <a href="/form-submission" style={{
          color: '#374151',
          textDecoration: 'none',
          fontWeight: '500'
        }}>
          Form Submission
        </a>
        <a href="/rate-calculator" style={{
          color: '#374151',
          textDecoration: 'none',
          fontWeight: '500'
        }}>
          Rate Calculator
        </a>
        <a href="/faqs" style={{
          color: '#374151',
          textDecoration: 'none',
          fontWeight: '500'
        }}>
          FAQs
        </a>
      </div>
    </div>
  </nav>
);

// Main App Component
function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Navigation */}
      <Navigation />
      
      {/* Current Hero Section */}
      <div style={{
        minHeight: 'calc(100vh - 70px)',
        background: 'linear-gradient(to bottom right, #ec4899, #8b5cf6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
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
    </div>
  );
}

export default App;
