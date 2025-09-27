import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Navigation */}
      <nav style={{
        backgroundColor: 'white',
        padding: '20px 0',
        borderBottom: '1px solid #f1f5f9'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#ec4899',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '20px'
            }}>
              C
            </div>
            <div>
              <div style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#ec4899'
              }}>
                Cashifygcmart
              </div>
              <div style={{
                fontSize: '10px',
                color: '#6b7280',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                INSTANT OFFERS, SAME-DAY PAYMENTS
              </div>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '30px',
            alignItems: 'center'
          }}>
            <a href="/" style={{ color: '#374151', textDecoration: 'none', fontWeight: '500' }}>Home</a>
            <a href="/getting-started" style={{ color: '#374151', textDecoration: 'none', fontWeight: '500' }}>Getting Started</a>
            <a href="/accepted-cards" style={{ color: '#374151', textDecoration: 'none', fontWeight: '500' }}>Accepted Gift Cards</a>
            <a href="/form-submission" style={{ color: '#374151', textDecoration: 'none', fontWeight: '500' }}>Form Submission</a>
            <a href="/rate-calculator" style={{ color: '#374151', textDecoration: 'none', fontWeight: '500' }}>Rate Calculator</a>
            <a href="/faqs" style={{ color: '#374151', textDecoration: 'none', fontWeight: '500' }}>FAQs</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{
        backgroundColor: '#f8fafc',
        padding: '80px 20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          <div>
            <h1 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: '#1f2937',
              lineHeight: '1.2'
            }}>
              Sell Unused Gift Cards for Same-Day Cash Online
            </h1>
            <p style={{
              fontSize: '18px',
              color: '#6b7280',
              marginBottom: '30px',
              lineHeight: '1.6'
            }}>
              CashifyGCmart is the trusted gift card exchange platform offering instant quotes, competitive rates up to 93%, and secure same-day payments.
            </p>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
              <button style={{
                backgroundColor: '#ec4899',
                color: 'white',
                padding: '15px 30px',
                border: 'none',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
                Start Here
              </button>
              <button style={{
                backgroundColor: '#1f2937',
                color: 'white',
                padding: '15px 30px',
                border: 'none',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
                See 100+ Accepted Brands
              </button>
            </div>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '20px',
            padding: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px'
          }}>
            <div style={{
              width: '200px',
              height: '300px',
              backgroundColor: 'white',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#374151',
              fontSize: '14px'
            }}>
              <div style={{ marginBottom: '20px', fontWeight: 'bold' }}>Payment Receipt</div>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#10b981', marginBottom: '10px' }}>$92</div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Amazon Gift Card</div>
              <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '20px' }}>Processing completed</div>
              <div style={{
                backgroundColor: '#10b981',
                color: 'white',
                padding: '8px 20px',
                borderRadius: '6px',
                fontSize: '12px'
              }}>
                Paid ✓
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div style={{
        backgroundColor: '#f8fafc',
        padding: '80px 20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px'
        }}>
          <div style={{
            backgroundColor: '#ec4899',
            padding: '40px',
            borderRadius: '12px',
            textAlign: 'center',
            color: 'white'
          }}>
            <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>100+</div>
            <div style={{ fontSize: '18px', opacity: 0.9 }}>Gift Card Brands</div>
          </div>
          <div style={{
            backgroundColor: '#8b5cf6',
            padding: '40px',
            borderRadius: '12px',
            textAlign: 'center',
            color: 'white'
          }}>
            <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>92%</div>
            <div style={{ fontSize: '18px', opacity: 0.9 }}>Average Payout Rate</div>
          </div>
          <div style={{
            backgroundColor: '#06b6d4',
            padding: '40px',
            borderRadius: '12px',
            textAlign: 'center',
            color: 'white'
          }}>
            <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>230+</div>
            <div style={{ fontSize: '18px', opacity: 0.9 }}>Trusted Vendors</div>
          </div>
        </div>
      </div>

      {/* Customer Count Section */}
      <div style={{
        backgroundColor: '#ec4899',
        padding: '60px 20px',
        textAlign: 'center',
        color: 'white'
      }}>
        <h2 style={{
          fontSize: '24px',
          marginBottom: '20px',
          fontWeight: '600'
        }}>
          CUSTOMERS SERVED TILL DATE
        </h2>
        <div style={{
          fontSize: '72px',
          fontWeight: 'bold',
          marginBottom: '10px'
        }}>
          874,458
        </div>
      </div>

      {/* Testimonials Section */}
      <div style={{
        backgroundColor: 'white',
        padding: '80px 20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '60px',
            color: '#374151'
          }}>
            What Our Customers Say
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            <div style={{
              backgroundColor: '#f8fafc',
              padding: '30px',
              borderRadius: '12px',
              textAlign: 'left'
            }}>
              <div style={{ color: '#6b7280', marginBottom: '20px', fontSize: '16px' }}>
                "Fast and reliable service. Got my payment within hours!"
              </div>
              <div style={{ fontWeight: 'bold', color: '#374151' }}>
                Jordan K., Chicago
              </div>
            </div>
            <div style={{
              backgroundColor: '#f8fafc',
              padding: '30px',
              borderRadius: '12px',
              textAlign: 'left'
            }}>
              <div style={{ color: '#6b7280', marginBottom: '20px', fontSize: '16px' }}>
                "Great rates and excellent customer support. Highly recommended!"
              </div>
              <div style={{ fontWeight: 'bold', color: '#374151' }}>
                Samantha W., Boston
              </div>
            </div>
            <div style={{
              backgroundColor: '#f8fafc',
              padding: '30px',
              borderRadius: '12px',
              textAlign: 'left'
            }}>
              <div style={{ color: '#6b7280', marginBottom: '20px', fontSize: '16px' }}>
                "Simple process, fair prices. Will definitely use again."
              </div>
              <div style={{ fontWeight: 'bold', color: '#374151' }}>
                Cameron P., Denver
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#1f2937',
        color: 'white',
        padding: '60px 20px 30px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>
              Cashifygcmart
            </h3>
            <p style={{ color: '#9ca3af', lineHeight: 1.6 }}>
              Your trusted platform for selling unused gift cards quickly and securely.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '15px' }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>Home</a>
              <a href="/getting-started" style={{ color: '#9ca3af', textDecoration: 'none' }}>Getting Started</a>
              <a href="/accepted-cards" style={{ color: '#9ca3af', textDecoration: 'none' }}>Accepted Cards</a>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '15px' }}>
              Support
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="/faqs" style={{ color: '#9ca3af', textDecoration: 'none' }}>FAQs</a>
              <a href="/contact" style={{ color: '#9ca3af', textDecoration: 'none' }}>Contact Us</a>
              <a href="/privacy" style={{ color: '#9ca3af', textDecoration: 'none' }}>Privacy Policy</a>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '15px' }}>
              Contact
            </h4>
            <div style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6 }}>
              <div>support@cashifygcmart.com</div>
              <div>(555) 013-2099</div>
            </div>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid #374151',
          paddingTop: '20px',
          textAlign: 'center',
          color: '#6b7280'
        }}>
          © 2024 Cashifygcmart. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
