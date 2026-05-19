import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';

export default function Works() {
  return (
    <section id="works" className="section-padding">
      <div className="max-content">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16">
          {/* Left Column — Sticky Label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 lg:sticky lg:top-28 lg:self-start"
          >
            <span className="section-label">— PORTFOLIO</span>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mt-3 mb-4 leading-tight">
              Stuff I've
              <br />
              <span className="text-accent">actually built.</span>
            </h2>

            <p className="font-body text-text-secondary text-sm leading-relaxed mb-6 max-w-xs">
              Not tutorials. Not clones. Real problems, real users,
              real deadlines. Here's the highlight reel.
            </p>

            <a
              href="https://github.com/Prashant822k"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-accent hover:text-accent-dim transition-colors text-sm font-medium group"
            >
              Explore more on GitHub
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>

          {/* Right Column — Project Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
