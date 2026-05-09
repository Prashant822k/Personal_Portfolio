import { ArrowRight, Loader2 } from 'lucide-react';
import { useContactForm } from '../../hooks/useContactForm';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const { formData, status, errorMessage, updateField, handleSubmit, resetForm } =
    useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Name */}
      <div className="relative">
        <input
          type="text"
          id="contact-name"
          value={formData.name}
          onChange={(e) => updateField('name', e.target.value)}
          placeholder="What's your name?"
          disabled={status === 'submitting' || status === 'success'}
          className="w-full bg-transparent border-b border-border pb-3 pt-1 font-body text-text-primary text-base placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors duration-200"
        />
        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 focus-within:w-full" />
      </div>

      {/* Email */}
      <div className="relative">
        <input
          type="email"
          id="contact-email"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          placeholder="Your fancy email"
          disabled={status === 'submitting' || status === 'success'}
          className="w-full bg-transparent border-b border-border pb-3 pt-1 font-body text-text-primary text-base placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors duration-200"
        />
      </div>

      {/* Message */}
      <div className="relative">
        <textarea
          id="contact-message"
          value={formData.message}
          onChange={(e) => updateField('message', e.target.value)}
          placeholder="Tell me what's on your mind"
          rows={4}
          disabled={status === 'submitting' || status === 'success'}
          className="w-full bg-transparent border-b border-border pb-3 pt-1 font-body text-text-primary text-base placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
        />
      </div>

      {/* Error message */}
      <AnimatePresence>
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-red-400 font-body text-sm"
          >
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Submit / Success */}
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <span className="font-body text-accent text-sm font-medium">
              Got it. I'll be in touch.
            </span>
            <button
              type="button"
              onClick={resetForm}
              className="ml-auto font-body text-text-muted text-xs hover:text-text-secondary transition-colors"
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.button
            key="submit"
            type="submit"
            disabled={status === 'submitting'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-3 bg-accent hover:bg-accent-dim text-bg-primary font-body font-semibold text-sm px-6 py-3 rounded-card transition-colors duration-200 disabled:opacity-50"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </>
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </form>
  );
}
