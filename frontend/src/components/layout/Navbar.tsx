import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useActiveSection } from '../../hooks/useActiveSection';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'works', label: 'Works' },
  { id: 'journey', label: 'Journey' },
  { id: 'solving', label: 'Solving' },
];

export default function Navbar() {
  const activeSection = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300 ${
          scrolled ? 'border-b border-border/50' : ''
        }`}
      >
        <div className="max-content flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
            className="flex items-center gap-2 group"
            aria-label="Home"
          >
            {/* Pixel-art coder SVG logo */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="12" y="2" width="8" height="4" fill="#ff6b35" />
              <rect x="10" y="6" width="12" height="6" fill="#ff6b35" />
              <rect x="12" y="6" width="2" height="2" fill="#0f0f14" />
              <rect x="18" y="6" width="2" height="2" fill="#0f0f14" />
              <rect x="14" y="10" width="4" height="2" fill="#0f0f14" />
              <rect x="8" y="12" width="16" height="8" fill="#ff6b35" opacity="0.8" />
              <rect x="12" y="14" width="8" height="4" rx="1" fill="#0f0f14" />
              <rect x="13" y="15" width="2" height="2" fill="#ff6b35" />
              <rect x="17" y="15" width="2" height="2" fill="#ff6b35" />
              <rect x="10" y="20" width="4" height="6" fill="#ff6b35" opacity="0.6" />
              <rect x="18" y="20" width="4" height="6" fill="#ff6b35" opacity="0.6" />
              <rect x="6" y="14" width="4" height="2" fill="#ff6b35" opacity="0.5" />
              <rect x="22" y="14" width="4" height="2" fill="#ff6b35" opacity="0.5" />
            </svg>
            <span className="font-heading text-sm font-bold text-text-primary tracking-wide hidden sm:block group-hover:text-accent transition-colors">
              PK
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link, i) => (
              <div key={link.id} className="flex items-center">
                {i > 0 && (
                  <span className="text-text-muted mx-2 text-xs select-none">/</span>
                )}
                <button
                  onClick={() => handleNavClick(link.id)}
                  className="relative font-body text-sm text-text-secondary hover:text-text-primary transition-colors px-2 py-1"
                >
                  {link.label}
                  {/* Active dot */}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="active-nav-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              </div>
            ))}
          </nav>

          {/* CTAs (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Prashant_Kumar_Resume.pdf"
              className="flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-accent transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
            <div className="w-px h-4 bg-border" />
            <button
              onClick={() => handleNavClick('contact')}
              className="flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-wider text-accent hover:text-accent-dim transition-colors"
            >
              Let's Talk
              <span className="text-lg">→</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-text-primary p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg-primary/98 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`font-display text-4xl transition-colors ${
                  activeSection === link.id ? 'text-accent' : 'text-text-primary'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="font-display text-4xl text-accent mt-4"
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
