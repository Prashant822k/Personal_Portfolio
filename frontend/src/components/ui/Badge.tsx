import { motion } from 'framer-motion';

interface BadgeProps {
  text: string;
  variant: 'winner' | 'internship';
}

export default function Badge({ text, variant }: BadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`
        inline-block px-3 py-1 text-[10px] font-body font-semibold uppercase tracking-[0.1em] rounded-badge
        ${
          variant === 'winner'
            ? 'bg-accent text-bg-primary'
            : 'bg-transparent border border-accent text-accent'
        }
      `}
    >
      {text}
    </motion.span>
  );
}
