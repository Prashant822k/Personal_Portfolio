import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../types';
import Badge from './Badge';
import { CardContainer, CardBody } from './3d-card';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <CardContainer containerClassName="w-full">
        <CardBody className="w-full">
          <div
            className="relative w-full aspect-[4/3] cursor-pointer"
            style={{ perspective: '1200px' }}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={() => {
              if (project.ctaLink) {
                window.open(project.ctaLink, '_blank', 'noopener,noreferrer');
              } else {
                setIsFlipped((f) => !f);
              }
            }}
          >
            {/* Framer Motion handles the rotateY so the flip is a true 3D animation */}
            <motion.div
              className="relative w-full h-full"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* ── FRONT FACE ── */}
              <div
                className="absolute inset-0 rounded-card border border-border bg-bg-secondary overflow-hidden"
                style={{ backfaceVisibility: 'hidden' }}
              >
                {/* Badge + Stack */}
                <div className="flex items-center justify-between p-3 pb-1">
                  <div>
                    {project.badge && (
                      <Badge text={project.badge.text} variant={project.badge.variant} />
                    )}
                  </div>
                  <div className="flex gap-1.5 flex-wrap justify-end">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] font-body text-text-muted uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <div className="px-3 pb-2">
                  <h3 className="font-heading text-lg md:text-xl font-bold text-text-primary">
                    {project.title}
                  </h3>
                </div>

                {/* Image */}
                <div className="absolute inset-x-0 bottom-0 top-[72px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-bg-secondary/70 to-transparent" />
                </div>

                {/* Flip hint */}
                <div className="absolute bottom-2 right-3 text-[9px] font-mono text-text-muted/50 uppercase tracking-wider">
                  hover to flip →
                </div>
              </div>

              {/* ── BACK FACE ── */}
              <div
                className="absolute inset-0 rounded-card border border-accent/20 bg-bg-secondary overflow-hidden flex flex-col justify-between p-5"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                {/* Top */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-accent mb-3">
                    {project.title}
                  </h3>
                  <p className="font-body text-[13px] text-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Bottom CTA */}
                <div className="pt-3 border-t border-border mt-3">
                  {project.ctaLink ? (
                    <a
                      href={project.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-body text-sm font-semibold text-accent hover:text-accent-dim transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.ctaText}
                      <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <span className="font-body text-xs text-text-muted italic">
                      Internship work — details on request
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}
