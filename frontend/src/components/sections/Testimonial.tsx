import { motion } from 'framer-motion';
import TestimonialBlock from '../ui/TestimonialBlock';

export default function Testimonial() {
  return (
    <section id="testimonial" className="section-padding">
      <div className="max-content max-w-4xl">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label block mb-8"
        >
          — WHAT THEY SAY
        </motion.span>

        <TestimonialBlock />
      </div>
    </section>
  );
}
