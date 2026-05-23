import { motion } from 'framer-motion';
import { certifications } from '../../data/certifications';

export default function Certifications() {
  return (
    <section className="py-10 overflow-hidden">
      <div className="max-content mb-4">
        <span className="section-label">— CERTIFICATIONS</span>
      </div>

      {/* Scrolling strip */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex animate-scroll-x"
        >
          {/* Double the items for seamless loop */}
          {[...certifications, ...certifications].map((cert, i) => (
            <div key={`${cert.id}-${i}`} className="flex-shrink-0 mx-2">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-accent/20 bg-bg-secondary/50 hover:border-accent/40 transition-colors cursor-default">
                <span className="font-body text-xs font-medium text-accent whitespace-nowrap">
                  {cert.name}
                </span>
                <span className="text-text-muted">·</span>
                <span className="font-body text-xs text-text-muted whitespace-nowrap">
                  {cert.issuer}
                </span>
                {cert.highlight && (
                  <>
                    <span className="text-text-muted">·</span>
                    <span className="font-mono text-[10px] text-accent font-bold whitespace-nowrap">
                      {cert.highlight}
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
