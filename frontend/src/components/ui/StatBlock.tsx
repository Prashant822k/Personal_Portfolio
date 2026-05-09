import { motion } from 'framer-motion';

interface StatBlockProps {
  value: string;
  label: string;
  delay?: number;
}

export default function StatBlock({ value, label, delay = 0 }: StatBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col"
    >
      <span className="font-mono text-3xl md:text-4xl font-bold text-accent leading-none">
        {value}
      </span>
      <span className="font-body text-[11px] uppercase tracking-[0.12em] text-text-muted mt-2">
        {label}
      </span>
    </motion.div>
  );
}
