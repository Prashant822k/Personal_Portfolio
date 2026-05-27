import { motion } from 'framer-motion';
import { ExternalLink, Mail } from 'lucide-react';
import ContactForm from '../ui/ContactForm';

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/Prashant822k',
    svgPath: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/prashant-kumar-2k6/',
    svgPath: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">— CONTACT</span>

            <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.95] text-text-primary mt-3 mb-6">
              Have something
              <br />
              interesting?
              <br />
              <span className="text-accent">I'm all ears.</span>
            </h2>

            <p className="font-body text-text-secondary text-sm leading-relaxed mb-6 max-w-sm">
              Internship offers, project ideas, or just want to say hi — 
              drop me a message. Based in Bengaluru, usually online.
            </p>

            {/* Email */}
            <a
              href="mailto:pkkv2006@gmail.com"
              className="inline-flex items-center gap-2 font-body text-accent hover:text-accent-dim transition-colors text-sm font-medium mb-8 group"
            >
              pkkv2006@gmail.com
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>

            {/* Social links */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex items-center gap-2 px-3 py-2 rounded-card border border-border bg-bg-secondary hover:border-accent/30 hover:bg-bg-elevated transition-all group"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-text-muted group-hover:text-accent transition-colors">
                    <path d={social.svgPath} />
                  </svg>
                  <span className="font-body text-xs text-text-secondary group-hover:text-text-primary transition-colors hidden sm:inline">
                    {social.name}
                  </span>
                </a>
              ))}

              <a
                href="https://leetcode.com/u/Prashant2k6/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="flex items-center gap-2 px-3 py-2 rounded-card border border-border bg-bg-secondary hover:border-accent/30 hover:bg-bg-elevated transition-all group"
              >
                <ExternalLink size={16} className="text-text-muted group-hover:text-accent transition-colors" />
                <span className="font-body text-xs text-text-secondary group-hover:text-text-primary transition-colors hidden sm:inline">
                  LeetCode
                </span>
              </a>

              <a
                href="mailto:pkkv2006@gmail.com"
                aria-label="Email"
                className="flex items-center gap-2 px-3 py-2 rounded-card border border-border bg-bg-secondary hover:border-accent/30 hover:bg-bg-elevated transition-all group"
              >
                <Mail size={16} className="text-text-muted group-hover:text-accent transition-colors" />
                <span className="font-body text-xs text-text-secondary group-hover:text-text-primary transition-colors hidden sm:inline">
                  Email
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
