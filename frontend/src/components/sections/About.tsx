import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';
import TypewriterText from '../ui/TypewriterText';
import { BackgroundBeamsWithCollision } from '../ui/background-beams-with-collision';

const typewriterWords = [
  { text: 'Full Stack Engineer', color: '#ff6b35' },
  { text: 'ML Systems Builder', color: '#3b82f6' },
  { text: 'Problem Solver', color: '#ffa116' },
];

export default function About() {
  return (
    <section id="about" className="relative">
      <BackgroundBeamsWithCollision className="h-auto md:h-auto min-h-[90vh] py-24 md:py-28 items-start section-padding">
        <div className="max-content w-full relative z-10">

          {/* ═══ Hero Block ═══ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-8"
          >
            {/* Row: Text left + Photo overlay/behind */}
            <div className="relative w-full flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 min-h-[480px]">

              {/* ── Left: Name + Typewriter + Stats ── */}
              <div className="relative z-10 flex-1 min-w-0 max-w-2xl md:pr-12">
                {/* Big Name */}
                <h1 className="font-display text-[clamp(52px,9vw,120px)] leading-[0.82] tracking-tight mb-1">
                  <span className="text-text-primary">PRASHANT</span>
                  <br />
                  <span className="gradient-text">KUMAR</span>
                </h1>

                {/* Typewriter */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[2px] bg-accent" />
                  <TypewriterText
                    words={typewriterWords}
                    className="text-base md:text-lg"
                    typingSpeed={70}
                    deletingSpeed={40}
                    pauseDuration={2500}
                  />
                </div>

                {/* ── Stat cards — FIRST IMPRESSION ── */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="card-base p-3 text-center">
                    <span className="font-mono text-2xl md:text-3xl font-bold text-accent block">300+</span>
                    <span className="font-body text-[10px] text-text-muted uppercase tracking-wider">
                      Problems Solved
                    </span>
                  </div>
                  <div className="card-base p-3 text-center">
                    <span className="font-mono text-2xl md:text-3xl font-bold text-text-primary block">5+</span>
                    <span className="font-body text-[10px] text-text-muted uppercase tracking-wider">
                      Projects Shipped
                    </span>
                  </div>
                  <div className="card-base p-3 text-center">
                    <span className="font-mono text-2xl md:text-3xl font-bold text-text-primary block">9.52</span>
                    <span className="font-body text-[10px] text-text-muted uppercase tracking-wider">
                      CGPA — NMIT
                    </span>
                  </div>
                </div>

                <p className="font-body text-text-secondary/95 text-sm leading-relaxed mb-4 max-w-md">
                  Third-year <span className="text-text-primary font-medium">ISE undergrad</span> at <span className="text-text-primary font-medium">NMIT Bangalore</span>. I build <span className="text-accent font-semibold">full-stack apps</span>, compete on <span className="text-accent font-semibold">Codeforces</span>, and ship things that solve <span className="text-text-primary font-semibold">real problems</span>.
                </p>

                {/* Tag pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {['IEEE GRSS Chair', 'Hackathon Winner', 'Open to Internships'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-body font-semibold uppercase tracking-[0.08em] px-2.5 py-1 border border-accent/40 text-accent rounded-full"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>

                {/* Social Links Row */}
                <div className="flex flex-wrap items-center gap-4 mt-2">
                  <a
                    href="mailto:pkkv2006@gmail.com"
                    className="p-2.5 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-bg-primary transition-colors border border-accent/20"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                  <a
                    href="https://github.com/Prashant822k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-bg-elevated/50 text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-colors border border-border"
                    aria-label="GitHub"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/prashant-kumar-2k6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-bg-elevated/50 text-text-secondary hover:text-[#0a66c2] hover:bg-bg-elevated transition-colors border border-border"
                    aria-label="LinkedIn"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    href="https://leetcode.com/u/Prashant2k6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-bg-elevated/50 text-text-secondary hover:text-[#ffa116] hover:bg-bg-elevated transition-colors border border-border font-body text-sm font-medium"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                    </svg>
                    LeetCode <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* ── Right/Behind: Photo — clean, borderless, enlarged ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative md:absolute right-0 bottom-0 md:-right-8 md:-top-28 h-[320px] md:h-[135%] w-full md:w-[50%] pointer-events-none z-0 flex justify-center md:justify-end items-end md:items-start select-none mt-2 md:mt-0"
              >
                <img
                  src="/photo.webp"
                  alt="Prashant Kumar"
                  className="h-full w-auto object-contain object-bottom"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)'
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* ═══ Core Pillars (Terminal Docking + Typewriter Reveal) ═══ */}
          <TerminalDocking />
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
}

function TerminalDocking() {
  const [text, setText] = useState('');
  const [isInView, setIsInView] = useState(false);
  const [showModulesReady, setShowModulesReady] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const fullCommand = 'fetch_my_strengths()';

  useEffect(() => {
    if (!isInView) return;

    let index = 0;
    setText('');
    const typingInterval = setInterval(() => {
      if (index < fullCommand.length) {
        index++;
        setText(fullCommand.slice(0, index));
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setShowModulesReady(true);
          
          setTimeout(() => {
            setShowCards(true);
          }, 450);
        }, 300);
      }
    }, 60);

    return () => clearInterval(typingInterval);
  }, [isInView]);

  const pillars = [
    {
      moduleName: 'sys.full_stack',
      title: 'Full Stack Dev',
      link: '#works',
      specs: [
        { label: 'STATUS', value: 'ACTIVE', color: 'text-emerald-400' },
        { label: 'STACK ', value: 'React · TypeScript · FastAPI · SQL' },
        { label: 'UPTIME', value: '99.9% (Continuous Integration)' },
      ],
    },
    {
      moduleName: 'sys.problem_solving',
      title: 'Problem Solving',
      link: '#solving',
      specs: [
        { label: 'STATUS', value: 'ACTIVE', color: 'text-emerald-400' },
        { label: 'RANK  ', value: 'Pupil on Codeforces, 1450+ on Leetcode' },
        { label: 'SOLVED', value: '300+ Problems (LeetCode and Codeforces)' },
      ],
    },
    {
      moduleName: 'sys.ml_systems',
      title: 'ML Systems',
      link: '#works',
      specs: [
        { label: 'STATUS', value: 'ACTIVE', color: 'text-emerald-400' },
        { label: 'BUILT ', value: '3 High-Impact ML Projects' },
        { label: 'FOCUS ', value: 'Neural Networks & Geospatial Analytics' },
      ],
    },
  ];

  return (
    <motion.div
      onViewportEnter={() => {
        if (!isInView) setIsInView(true);
      }}
      viewport={{ once: true, amount: 0.2 }}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-4xl mx-auto mt-24 border border-border bg-bg-secondary/30 backdrop-blur-md rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] font-mono text-xs md:text-sm"
    >
      <style>{`
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cursor-blink {
          animation: cursor-blink 0.8s step-end infinite;
        }
      `}</style>

      {/* Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-bg-elevated/40 border-b border-border select-none">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:opacity-80 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:opacity-80 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:opacity-80 transition-opacity" />
        </div>
        <span className="text-[10px] text-text-muted">guest@pk:~ (bash)</span>
        <div className="w-12" />
      </div>

      {/* Terminal Screen */}
      <div className="p-6 md:p-8 text-left leading-relaxed min-h-[300px]">
        {/* Command Line */}
        <div className="flex items-center gap-2 mb-8 text-text-secondary select-none text-xs md:text-sm">
          <span className="text-accent font-bold">guest@pk:~$</span>
          <span className="text-text-primary">{text}</span>
          <span className="w-2.5 h-4 bg-accent cursor-blink" />
        </div>

        {/* Output Area */}
        {showModulesReady && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="text-[11px] text-text-muted mb-4 border-b border-border/30 pb-2 select-none">
              [SYSTEM DIODE] QUERY RESULT: 3 MODULES READY
            </div>
            
            {showCards && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pillars.map((pillar, idx) => (
                  <motion.a
                    href={pillar.link}
                    key={pillar.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: idx * 0.15,
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    className="group relative flex flex-col justify-between p-5 rounded-lg border border-border/50 bg-bg-secondary/40 hover:border-accent/40 hover:bg-bg-elevated/20 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(255,107,53,0.12)] hover:-translate-y-1.5 hover:scale-[1.03] cursor-pointer select-none"
                    style={{
                      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    {/* Card Glow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />

                    {/* Header/Module identifier */}
                    <div className="flex items-center justify-between border-b border-border/20 pb-3 mb-4 text-[10px]">
                      <span className="text-accent tracking-wider font-semibold">
                        {pillar.moduleName}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>

                    {/* Body Content */}
                    <div>
                      <h4 className="font-heading text-lg font-bold text-text-primary group-hover:text-accent transition-colors duration-200">
                        {pillar.title}
                      </h4>

                      {/* Stats output table format */}
                      <div className="mt-4 space-y-2 text-[11px] text-text-secondary leading-normal">
                        {pillar.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="grid grid-cols-[60px_1fr] gap-1">
                            <span className="text-text-muted">{spec.label} :</span>
                            <span className={spec.color || 'text-text-primary'}>
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom indicator */}
                    <div className="mt-6 text-[9px] text-text-muted flex justify-between items-center border-t border-border/20 pt-3">
                      <span>SYS_LOAD_OK</span>
                      <span className="group-hover:text-accent transition-colors">→</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}


