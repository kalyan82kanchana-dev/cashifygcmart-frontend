/ Animated Counter Component
const AnimatedCounter = ({ target, duration = 2000 }) => {
  const [count, setCount] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const counterRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.6,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  React.useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * target);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <span ref={counterRef}>
      {count.toLocaleString()}
    </span>
  );
};

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
      <div style={{
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#ec4899'
      }}>
        Cashifygcmart
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
);

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Navigation />
      
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #ec4899 100%)',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '40px 20px'
      }}>
        <div>
          <h1 style={{
            fontSize: '60px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: 'white'
          }}>
            Sell Unused Gift Cards for Same-Day Cash Online
          </h1>
          <p style={{
            fontSize: '24px',
            marginBottom: '40px',
            color: 'white',
            opacity: 0.9
          }}>
            Turn your unwanted gift cards into instant cash with our secure platform
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
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
            <button style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '15px 30px',
              border: '2px solid white',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              See 100+ Accepted Brands
            </button>
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

      {/* Animated Counter Section */}
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
          <AnimatedCounter target={874458} duration={3000} />
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
