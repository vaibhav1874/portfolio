import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '1200px',
      height: '64px',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px',
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', fontFamily: 'var(--font-syne)' }}>
        VAIBHAV<span style={{ color: 'var(--accent-primary)' }}>.</span>
      </div>
      
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        <Link href="#about" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>About</Link>
        <Link href="#projects" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Projects</Link>
        <Link href="#contact" className="btn btn-primary" style={{ padding: '8px 20px' }}>Contact</Link>
      </div>
    </nav>
  );
}
