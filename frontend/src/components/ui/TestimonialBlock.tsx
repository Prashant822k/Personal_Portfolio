import { motion } from 'framer-motion';

export default function TestimonialBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-bg-secondary rounded-card border border-border p-8 md:p-12 border-l-4 border-l-accent"
    >
      {/* Decorative quote mark */}
      <span className="absolute -top-2 left-6 md:left-10 font-display text-[80px] md:text-[120px] text-accent/20 leading-none select-none pointer-events-none">
        &ldquo;
      </span>

      {/* Quote text */}
      <blockquote className="relative z-10 mt-8 md:mt-10">
        <p className="font-heading text-lg md:text-xl lg:text-2xl font-bold text-text-primary leading-relaxed mb-2">
          &ldquo;Prashant demonstrated a high level of technical ownership and often took initiative in structuring
          components, improving system architecture, and proposing innovative solutions to practical challenges.&rdquo;
        </p>
        <p className="font-body text-base md:text-lg text-text-secondary leading-relaxed mt-4">
          &ldquo;He coordinated effectively with both the AI/ML team and other developers, clearly articulated
          ideas and trade-offs, and ensured alignment between technical implementation and project goals.
          He consistently took responsibility for deliverables and followed through with a strong sense of accountability.&rdquo;
        </p>
      </blockquote>

      {/* Attribution */}
      <div className="mt-8 flex items-center gap-4">
        {/* Avatar placeholder */}
        <div className="w-12 h-12 rounded-full bg-bg-elevated border border-border flex items-center justify-center">
          <span className="font-heading text-accent text-sm font-bold">YR</span>
        </div>
        <div>
          <p className="font-body text-sm font-medium text-text-primary">
            Yogesh Kumar Reddy Ramireddy
          </p>
          <p className="font-body text-xs text-text-muted">
            Founder, PhytoMaps 🇳🇱
          </p>
        </div>
      </div>
    </motion.div>
  );
}
