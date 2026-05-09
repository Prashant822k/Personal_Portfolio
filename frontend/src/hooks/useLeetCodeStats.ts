import { useState, useEffect } from 'react';

const LC_API = 'https://alfa-leetcode-api.onrender.com';
const LC_USERNAME = 'Prashant2k6';

export interface LeetCodeSolved {
  solvedProblem: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalSubmissionNum?: { difficulty: string; count: number; submissions: number }[];
}

export interface LeetCodeContest {
  contestAttend: number;
  contestRating: number;
  contestGlobalRanking: number;
  totalParticipants: number;
  contestTopPercentage: number;
  contestParticipation: {
    attended: boolean;
    rating: number;
    ranking: number;
    trendDirection: string;
    problemsSolved: number;
    totalProblems: number;
    contest: {
      title: string;
      startTime: number;
    };
  }[];
}

export interface LeetCodeProfile {
  username: string;
  name: string;
  ranking: number;
  skillTags: string[];
}

interface LeetCodeData {
  solved: LeetCodeSolved | null;
  contest: LeetCodeContest | null;
  profile: LeetCodeProfile | null;
  loading: boolean;
  error: boolean;
}

// Fallback data in case API is down
const FALLBACK_SOLVED: LeetCodeSolved = {
  solvedProblem: 133,
  easySolved: 88,
  mediumSolved: 41,
  hardSolved: 4,
};

const FALLBACK_CONTEST: LeetCodeContest = {
  contestAttend: 2,
  contestRating: 1472.72,
  contestGlobalRanking: 463186,
  totalParticipants: 874223,
  contestTopPercentage: 53.44,
  contestParticipation: [],
};

export function useLeetCodeStats(): LeetCodeData {
  const [data, setData] = useState<LeetCodeData>({
    solved: null,
    contest: null,
    profile: null,
    loading: true,
    error: false,
  });

  useEffect(() => {
    let cancelled = false;

    async function fetchAll() {
      try {
        const [solvedRes, contestRes, profileRes] = await Promise.allSettled([
          fetch(`${LC_API}/${LC_USERNAME}/solved`),
          fetch(`${LC_API}/${LC_USERNAME}/contest`),
          fetch(`${LC_API}/${LC_USERNAME}`),
        ]);

        if (cancelled) return;

        const solved = solvedRes.status === 'fulfilled' ? await solvedRes.value.json() : FALLBACK_SOLVED;
        const contest = contestRes.status === 'fulfilled' ? await contestRes.value.json() : FALLBACK_CONTEST;
        const profile = profileRes.status === 'fulfilled' ? await profileRes.value.json() : null;

        setData({
          solved: solved?.solvedProblem ? solved : FALLBACK_SOLVED,
          contest: contest?.contestRating ? contest : FALLBACK_CONTEST,
          profile,
          loading: false,
          error: false,
        });
      } catch {
        if (!cancelled) {
          setData({
            solved: FALLBACK_SOLVED,
            contest: FALLBACK_CONTEST,
            profile: null,
            loading: false,
            error: true,
          });
        }
      }
    }

    fetchAll();
    return () => { cancelled = true; };
  }, []);

  return data;
}
