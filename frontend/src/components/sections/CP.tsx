import { motion } from 'framer-motion';
import { ExternalLink, Loader2 } from 'lucide-react';
import SkillTimeline from '../ui/SkillTimeline';
import { useLeetCodeStats } from '../../hooks/useLeetCodeStats';
import { useCodeforcesStats } from '../../hooks/useCodeforcesStats';
import { CardContainer, CardBody } from '../ui/3d-card';

function DifficultyBar({ label, count, total, color }: { label: string; count: number; total: number; color: string }) {
  const pct = total > 0 ? (count / total) * 100 : 0;
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[11px] text-text-muted w-16">{label}</span>
      <div className="flex-1 h-2 bg-bg-elevated rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
      <span className="font-mono text-xs text-text-primary w-8 text-right">{count}</span>
    </div>
  );
}

export default function CP() {
  const lc = useLeetCodeStats();
  const cf = useCodeforcesStats();

  return (
    <div className="w-full">
      {/* ── Section A: Skills Timeline ── */}
      <section id="journey" className="section-padding pb-6 md:pb-10">
        <div className="max-content">
        {/* ── Section A: Skills Timeline ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span className="section-label">— JOURNEY</span>
          <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.95] text-text-primary mt-3 mb-10">
            How I got here, <span className="text-accent">year by year.</span>
          </h2>
          <div className="pt-2">
            <SkillTimeline />
          </div>
        </motion.div>
        </div>
      </section>

      {/* ── Section B: Problem Solving & Competitive Programming ── */}
      <section id="solving" className="section-padding pt-6 md:pt-10">
        <div className="max-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">— PROBLEM SOLVING</span>
          <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.95] text-text-primary mt-3 mb-2">
            On the <span className="text-accent">Leaderboard.</span>
          </h2>
          <p className="font-body text-text-secondary text-sm mb-8 max-w-lg">
            I grind problems on LeetCode and compete on Codeforces. These stats are live — fetched straight from the APIs, no hardcoding.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* ── LeetCode Card ── */}
            <CardContainer containerClassName="w-full">
              <CardBody className="w-full">
                <a
                  href="https://leetcode.com/u/Prashant2k6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block card-base p-6 relative overflow-hidden group cursor-pointer"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#ffa116]/15 flex items-center justify-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffa116">
                          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-text-primary">LeetCode</h3>
                        <p className="font-mono text-[10px] text-text-muted">@Prashant2k6</p>
                      </div>
                    </div>
                    <span className="flex items-center gap-1 font-body text-xs text-accent">
                      Profile <ExternalLink size={12} />
                    </span>
                  </div>

                  {lc.loading ? (
                    <div className="flex items-center justify-center py-8">
                      <Loader2 size={20} className="animate-spin text-text-muted" />
                      <span className="ml-2 font-body text-sm text-text-muted">Fetching live data...</span>
                    </div>
                  ) : (
                    <>
                      {/* Big stat */}
                      <div className="flex items-end gap-3 mb-5">
                        <span className="font-mono text-5xl font-bold text-accent leading-none">
                          {lc.solved?.solvedProblem ?? '—'}
                        </span>
                        <span className="font-body text-xs text-text-muted uppercase tracking-wider pb-1">
                          problems solved
                        </span>
                      </div>

                      {/* Difficulty breakdown */}
                      <div className="space-y-2.5 mb-5">
                        <DifficultyBar label="Easy" count={lc.solved?.easySolved ?? 0} total={lc.solved?.solvedProblem ?? 1} color="#00b8a3" />
                        <DifficultyBar label="Medium" count={lc.solved?.mediumSolved ?? 0} total={lc.solved?.solvedProblem ?? 1} color="#ffa116" />
                        <DifficultyBar label="Hard" count={lc.solved?.hardSolved ?? 0} total={lc.solved?.solvedProblem ?? 1} color="#ef4743" />
                      </div>

                      {/* Contest + Submissions stats */}
                      {lc.contest && (
                        <div className="border-t border-border pt-4">
                          <div className="flex gap-6">
                            <div>
                              <span className="font-mono text-xl font-bold text-text-primary">
                                {Math.round(lc.contest.contestRating)}
                              </span>
                              <p className="font-body text-[10px] text-text-muted uppercase tracking-wider mt-0.5">Contest Rating</p>
                            </div>
                            <div>
                              <span className="font-mono text-xl font-bold text-text-primary">
                                {lc.contest.contestAttend}
                              </span>
                              <p className="font-body text-[10px] text-text-muted uppercase tracking-wider mt-0.5">Contests</p>
                            </div>
                            <div>
                              <span className="font-mono text-xl font-bold text-text-primary">
                                {lc.solved?.totalSubmissionNum?.[0]?.submissions ?? '—'}
                              </span>
                              <p className="font-body text-[10px] text-text-muted uppercase tracking-wider mt-0.5">Submissions</p>
                            </div>
                          </div>

                          {/* Recent contest results */}
                          {lc.contest.contestParticipation.length > 0 && (
                            <div className="mt-3 space-y-1.5">
                              {lc.contest.contestParticipation.slice(-3).reverse().map((cp) => (
                                <div key={cp.contest.startTime} className="flex items-center justify-between text-xs">
                                  <span className="font-body text-text-secondary truncate mr-2">
                                    {cp.contest.title}
                                  </span>
                                  <span className={`font-mono font-bold flex-shrink-0 ${
                                    cp.trendDirection === 'UP' ? 'text-green-400' : 'text-red-400'
                                  }`}>
                                    {cp.trendDirection === 'UP' ? '▲' : '▼'} #{cp.ranking}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  )}

                  {/* Decorative corner glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#ffa116]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </a>
              </CardBody>
            </CardContainer>

            <CardContainer containerClassName="w-full">
              <CardBody className="w-full">
                <a
                  href={`https://codeforces.com/profile/${cf.userInfo?.handle ?? 'Prashant_30k'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block card-base p-6 relative overflow-hidden group cursor-pointer"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#3b82f6">
                          <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5a1.5 1.5 0 0 1-3 0V9a1.5 1.5 0 0 1 1.5-1.5zm7.5-3A1.5 1.5 0 0 1 13.5 6v13.5a1.5 1.5 0 0 1-3 0V6A1.5 1.5 0 0 1 12 4.5zm7.5 6A1.5 1.5 0 0 1 21 12v7.5a1.5 1.5 0 0 1-3 0V12a1.5 1.5 0 0 1 1.5-1.5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-text-primary">Codeforces</h3>
                        <p className="font-mono text-[10px] text-text-muted">@{cf.userInfo?.handle ?? 'Prashant_30k'}</p>
                      </div>
                    </div>
                    <span className="flex items-center gap-1 font-body text-xs text-accent">
                      Profile <ExternalLink size={12} />
                    </span>
                  </div>

                  {cf.loading ? (
                    <div className="flex items-center justify-center py-8">
                      <Loader2 size={20} className="animate-spin text-text-muted" />
                      <span className="ml-2 font-body text-sm text-text-muted">Fetching live data...</span>
                    </div>
                  ) : (
                    <>
                      {/* Rank badge */}
                      <div className="flex items-center gap-3 mb-5">
                        <span className={`font-heading text-2xl font-bold capitalize ${
                          cf.userInfo?.rank === 'pupil' ? 'text-green-400' :
                          cf.userInfo?.rank === 'specialist' ? 'text-cyan-400' :
                          cf.userInfo?.rank === 'expert' ? 'text-blue-400' :
                          'text-text-primary'
                        }`}>
                          {cf.userInfo?.rank ?? 'Pupil'}
                        </span>
                        <div className="h-5 w-px bg-border" />
                        <span className="font-mono text-2xl font-bold text-text-primary">
                          {cf.userInfo?.rating ?? '—'}
                        </span>
                      </div>

                      {/* Stats grid */}
                      <div className="grid grid-cols-2 gap-4 mb-5">
                        <div className="bg-bg-elevated/50 rounded-card p-3">
                          <span className="font-mono text-lg font-bold text-text-primary">{cf.userInfo?.maxRating ?? '—'}</span>
                          <p className="font-body text-[10px] text-text-muted uppercase tracking-wider mt-0.5">Max Rating</p>
                        </div>
                        <div className="bg-bg-elevated/50 rounded-card p-3">
                          <span className="font-mono text-lg font-bold text-text-primary">{cf.ratingHistory.length}</span>
                          <p className="font-body text-[10px] text-text-muted uppercase tracking-wider mt-0.5">Contests</p>
                        </div>
                      </div>

                      {/* Rating history (last 5) */}
                      {cf.ratingHistory.length > 0 && (
                        <div className="border-t border-border pt-4">
                          <p className="font-body text-[10px] text-text-muted uppercase tracking-wider mb-2">Recent Contests</p>
                          <div className="space-y-1.5">
                            {cf.ratingHistory.slice(-5).reverse().map((r) => {
                              const delta = r.newRating - r.oldRating;
                              return (
                                <div key={r.contestId} className="flex items-center justify-between text-xs">
                                  <span className="font-body text-text-secondary truncate mr-2">
                                    {r.contestName.length > 35 ? r.contestName.substring(0, 35) + '…' : r.contestName}
                                  </span>
                                  <span className={`font-mono font-bold flex-shrink-0 ${
                                    delta >= 0 ? 'text-green-400' : 'text-red-400'
                                  }`}>
                                    {delta >= 0 ? '+' : ''}{delta}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {/* Decorative corner glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </a>
              </CardBody>
            </CardContainer>
          </div>
        </motion.div>
        </div>
      </section>
    </div>
  );
}
