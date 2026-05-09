import { motion } from 'framer-motion';
import { timeline } from '../../data/timeline';
import { 
  Code2, 
  Terminal, 
  Database, 
  Cloud, 
  Brain, 
  Calculator, 
  Trophy, 
  LayoutTemplate, 
  Box, 
  Layers, 
  Map 
} from 'lucide-react';

const getSkillIcon = (skill: string) => {
  const s = skill.toLowerCase();
  if (s.includes('python') || s.includes('c++') || s === 'c' || s.includes('typescript') || s.includes('react') || s.includes('next.js')) return <Code2 size={12} />;
  if (s.includes('shell')) return <Terminal size={12} />;
  if (s.includes('sql') || s.includes('supabase')) return <Database size={12} />;
  if (s.includes('cloud') || s.includes('deploy')) return <Cloud size={12} />;
  if (s.includes('ml') || s.includes('ai')) return <Brain size={12} />;
  if (s.includes('math') || s.includes('dsa')) return <Calculator size={12} />;
  if (s.includes('competitive')) return <Trophy size={12} />;
  if (s.includes('html') || s.includes('css')) return <LayoutTemplate size={12} />;
  if (s.includes('oop')) return <Box size={12} />;
  if (s.includes('api') || s.includes('node')) return <Layers size={12} />;
  if (s.includes('map')) return <Map size={12} />;
  return <Code2 size={12} />;
};

export default function SkillTimeline() {
  return (
    <div className="relative">
      {/* Vertical center line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

      {/* Animated progress overlay */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:block absolute left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-accent via-accent/60 to-accent/20"
      />

      <div className="space-y-0 md:space-y-0">
        {timeline.map((yearData, yearIndex) => {
          const isLeft = yearIndex % 2 === 0;
          return (
            <motion.div
              key={yearData.year}
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.6,
                delay: yearIndex * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative flex items-start gap-6 md:gap-0 ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              } mb-10 md:mb-14`}
            >
              {/* Content card */}
              <div className={`flex-1 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                <div className={`inline-block card-base card-hover p-5 max-w-sm ${
                  yearData.isCurrent ? 'border-accent/30' : ''
                }`}>
                  {/* Year badge */}
                  <div className={`flex items-center gap-2 mb-3 ${isLeft ? 'md:justify-end' : ''}`}>
                    <span className={`font-mono text-xs px-2 py-0.5 rounded-badge ${
                      yearData.isCurrent
                        ? 'bg-accent/15 text-accent border border-accent/30'
                        : 'bg-bg-elevated text-text-muted border border-border'
                    }`}>
                      {yearData.label}
                    </span>
                    <span className={`font-heading text-sm font-bold ${
                      yearData.isCurrent ? 'text-accent' : 'text-text-primary'
                    }`}>
                      {yearData.year}
                    </span>
                  </div>

                  {/* Skill tags */}
                  <div className={`flex flex-wrap gap-1.5 ${isLeft ? 'md:justify-end' : ''}`}>
                    {yearData.skills.map((skill, skillIdx) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: yearIndex * 0.15 + skillIdx * 0.04,
                        }}
                        className={`flex items-center gap-1.5 text-[11px] font-body font-medium px-2.5 py-1 rounded-full border transition-colors duration-200 hover:border-accent/40 hover:text-accent cursor-default ${
                          yearData.isCurrent
                            ? 'border-accent/30 text-accent bg-accent/5'
                            : 'border-border text-text-secondary bg-bg-elevated/30'
                        }`}
                      >
                        {getSkillIcon(skill)}
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center dot — desktop only */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                <div className={`w-4 h-4 rounded-full border-2 z-10 ${
                  yearData.isCurrent
                    ? 'bg-accent border-accent shadow-[0_0_16px_rgba(255,107,53,0.5)]'
                    : 'bg-bg-primary border-text-muted hover:border-accent/50 transition-colors'
                }`} />
                {yearData.isCurrent && (
                  <div className="absolute w-8 h-8 rounded-full bg-accent/10 animate-ping" />
                )}
              </div>

              {/* Mobile dot */}
              <div className="md:hidden absolute left-0 top-2">
                <div className={`w-3 h-3 rounded-full ${
                  yearData.isCurrent ? 'bg-accent shadow-[0_0_10px_rgba(255,107,53,0.5)]' : 'bg-text-muted'
                }`} />
              </div>

              {/* Empty space for the other side */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
