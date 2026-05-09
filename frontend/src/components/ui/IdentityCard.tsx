import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface IdentityCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  isPrimary?: boolean;
  delay?: number;
}

export default function IdentityCard({
  icon,
  title,
  subtitle,
  isPrimary = false,
  delay = 0,
}: IdentityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
      className={`
        relative p-6 rounded-card border overflow-hidden cursor-default group
        ${
          isPrimary
            ? 'bg-accent border-accent text-bg-primary'
            : 'bg-bg-secondary border-border hover:border-accent/30 hover:shadow-[0_0_30px_rgba(255,107,53,0.08)]'
        }
      `}
    >
      {/* Glow effect on dark cards */}
      {!isPrimary && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
      )}

      <div className={`text-2xl mb-3 ${isPrimary ? 'text-bg-primary' : 'text-accent'}`}>
        {icon}
      </div>

      <h3
        className={`font-heading text-lg font-bold mb-1 ${isPrimary ? 'text-bg-primary' : 'text-text-primary'}`}
      >
        {title}
      </h3>

      <p
        className={`font-body text-sm ${isPrimary ? 'text-bg-primary/70' : 'text-text-secondary'}`}
      >
        {subtitle}
      </p>
    </motion.div>
  );
}
