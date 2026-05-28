import { motion } from 'framer-motion';

const activities = [
  {
    emoji: '⚽',
    title: 'Football',
    level: 'Regional Level',
    description: 'Competed at the regional level — teamwork and quick decision-making on the pitch.',
  },
  {
    emoji: '⛸️',
    title: 'Roller Skating',
    level: 'District Level',
    description: 'Represented at district level competitions — balance, speed, and discipline.',
  },
  {
    emoji: '🏆',
    title: 'Road Safety',
    level: 'National Winner',
    description: 'Winner at the National Level Project Ideation Competition (Road Safety), Mumbai 2019 — hosted by Toyota.',
  },
];

export default function BeyondCode() {
  return (
    <section className="section-padding">
      <div className="max-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">— BEYOND CODE</span>
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-text-primary mt-2 mb-6">
            Not just a <span className="text-accent">developer.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {activities.map((activity, i) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className="card-base card-hover p-5 cursor-default group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{activity.emoji}</span>
                  <div>
                    <h3 className="font-heading text-base font-bold text-text-primary group-hover:text-accent transition-colors">
                      {activity.title}
                    </h3>
                    <span className="font-mono text-[10px] text-accent uppercase tracking-wider">
                      {activity.level}
                    </span>
                  </div>
                </div>
                <p className="font-body text-xs text-text-secondary leading-relaxed">
                  {activity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
