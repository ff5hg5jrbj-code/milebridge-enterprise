export default function Hero() {
  return (
    <section style={{ 
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 1
      }}></div>
      
      {/* Darker overlay - just for readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(193, 18, 31, 0.4) 100%)',
        zIndex: 2
      }}></div>
      
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 3 }} className="text-center px-4 max-w-5xl">
        <h1 style={{ 
          fontSize: '4rem', 
          fontWeight: '800', 
          color: 'white', 
          marginBottom: '1.5rem',
          lineHeight: '1.1',
          textShadow: '3px 3px 15px rgba(0,0,0,0.7)'
        }}>
          Connecting Journeys<br />Seamlessly
        </h1>
        
        <p style={{ 
          fontSize: '1.5rem', 
          color: 'white', 
          marginBottom: '2.5rem',
          textShadow: '2px 2px 8px rgba(0,0,0,0.6)'
        }}>
          Enterprise-grade logistics delivering nationwide with precision, speed, and reliability
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#services">
            <button style={{ 
              backgroundColor: '#C1121F', 
              color: 'white', 
              padding: '1rem 2.5rem', 
              borderRadius: '0.5rem', 
              fontWeight: '700', 
              fontSize: '1.125rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
              transition: 'all 0.3s'
            }}>
              View Services
            </button>
          </a>
          <a href="#about">
            <button style={{ 
              backgroundColor: 'white', 
              border: 'none', 
              color: '#C1121F', 
              padding: '1rem 2.5rem', 
              borderRadius: '0.5rem', 
              fontWeight: '700', 
              fontSize: '1.125rem',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
              transition: 'all 0.3s'
            }}>
              Learn More About Us
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
