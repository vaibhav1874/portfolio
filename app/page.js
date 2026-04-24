import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="section" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        textAlign: 'center',
        paddingTop: '120px'
      }}>
        <div className="fade-in-up">
          <p style={{ 
            color: 'var(--accent-primary)', 
            fontWeight: '600', 
            letterSpacing: '0.1em', 
            marginBottom: '16px',
            fontSize: '0.9rem'
          }}>
            WELCOME TO MY ARCHIVE
          </p>
          <h1 className="text-gradient" style={{ 
            fontSize: 'clamp(3rem, 8vw, 5rem)', 
            lineHeight: 1.1, 
            marginBottom: '24px' 
          }}>
            Crafting Digital<br />Experiences That Matter
          </h1>
          <p style={{ 
            maxWidth: '600px', 
            margin: '0 auto 40px', 
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            lineHeight: 1.6
          }}>
            I am a Full Stack Developer specializing in building high-performance, 
            aesthetically driven web applications using modern technologies.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#about" className="btn btn-outline">Read Story</a>
          </div>
        </div>
      </section>

      {/* Feature Section Placeholder */}
      <section className="section" id="projects">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', textAlign: 'left' }}>
          Selected <span style={{ color: 'var(--accent-primary)' }}>Works</span>
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '32px' 
        }}>
          {/* Project Card Placeholder */}
          <div className="glass" style={{ height: '400px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <p style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', marginBottom: '8px' }}>COMING SOON</p>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Next Big Thing</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>A revolution in digital interactions.</p>
          </div>
          <div className="glass" style={{ height: '400px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <p style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', marginBottom: '8px' }}>COMING SOON</p>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Emerald Portal</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>The future of premium design.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
