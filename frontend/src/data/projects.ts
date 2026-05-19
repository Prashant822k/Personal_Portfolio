import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'ghostrade',
    title: 'GhosTrade',
    description:
      'Real-time market integrity engine detecting anomalous stock behavior via unsupervised ML on OHLCV data. Four proprietary microstructure signals (VAI, VBS, PVD, LIP) + IsolationForest anomaly pipeline.',
    stack: ['React', 'ML', 'FastAPI', 'IsolationForest'],
    badge: {
      text: 'VIBE-A-THON 2026 — FINTECH TRACK WINNER',
      variant: 'winner',
    },
    image: '/images/ghostrade.webp',
    ctaText: 'Live Demo',
    ctaLink: 'https://ghostrade.vercel.app'
  },
  {
    id: 'phytomaps',
    title: 'PhytoMaps',
    description:
      'Built a scalable geospatial analytics platform during a remote internship with a Netherlands-based startup. Designed multi-tenant architecture with PostgreSQL RLS, developed high-volume tile ingestion handling 10,000+ tiles/session, and implemented secure 5GB multi-part uploads via Cloudflare R2 with signed URLs.',
    stack: ['React', 'TypeScript', 'Mapbox GL JS', 'Supabase', 'Cloudflare R2'],
    badge: {
      text: 'REMOTE INTERNSHIP (NETHERLANDS)',
      variant: 'internship',
    },
    image: '/images/phytomaps.webp',
    // No CTA link — internship-based, NDA-protected work
  },
  {
    id: 'faculty-portal',
    title: 'Faculty Development Portal',
    description:
      'Platform managing faculty professional development with role-based auth (Faculty / HoD / Admin), real-time Supabase updates, full TypeScript type-safety across frontend and backend.',
    stack: ['Full Stack', 'React', 'PostgreSQL', 'Supabase'],
    image: '/images/faculty-portal.webp',
    ctaText: 'Try it Out',
    ctaLink: 'https://fdp-theta.vercel.app',
  },
  {
    id: 'nuflash',
    title: 'NuFlash',
    description:
      'AI-powered news curation pipeline. OpenAI-driven article selection from RSS feeds, user preference storage, automated newsletter dispatch via Postmark.',
    stack: ['Next.js', 'OpenAI API', 'Supabase', 'Postmark'],
    image: '/images/nuflash.webp',
    ctaText: 'View on GitHub',
    ctaLink: 'https://github.com/Prashant822k/NuFlash',
  },
];
