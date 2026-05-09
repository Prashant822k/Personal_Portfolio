import { useState, useEffect } from 'react';

// UPDATE THIS with your actual Codeforces handle
const CF_USERNAME = 'Prashant_30k';

export interface CFUserInfo {
  handle: string;
  rating: number;
  maxRating: number;
  rank: string;
  maxRank: string;
  contribution: number;
  friendOfCount: number;
}

export interface CFRatingChange {
  contestId: number;
  contestName: string;
  handle: string;
  rank: number;
  ratingUpdateTimeSeconds: number;
  oldRating: number;
  newRating: number;
}

interface CodeforcesData {
  userInfo: CFUserInfo | null;
  ratingHistory: CFRatingChange[];
  loading: boolean;
  error: boolean;
}

// Fallback
const FALLBACK_USER: CFUserInfo = {
  handle: CF_USERNAME,
  rating: 1286,
  maxRating: 1286,
  rank: 'pupil',
  maxRank: 'pupil',
  contribution: 0,
  friendOfCount: 2,
};

export function useCodeforcesStats(): CodeforcesData {
  const [data, setData] = useState<CodeforcesData>({
    userInfo: null,
    ratingHistory: [],
    loading: true,
    error: false,
  });

  useEffect(() => {
    let cancelled = false;

    async function fetchAll() {
      try {
        const [infoRes, ratingRes] = await Promise.allSettled([
          fetch(`https://codeforces.com/api/user.info?handles=${CF_USERNAME}`),
          fetch(`https://codeforces.com/api/user.rating?handle=${CF_USERNAME}`),
        ]);

        if (cancelled) return;

        let userInfo: CFUserInfo | null = FALLBACK_USER;
        let ratingHistory: CFRatingChange[] = [];

        if (infoRes.status === 'fulfilled') {
          const infoData = await infoRes.value.json();
          if (infoData.status === 'OK' && infoData.result?.[0]) {
            userInfo = infoData.result[0];
          }
        }

        if (ratingRes.status === 'fulfilled') {
          const ratingData = await ratingRes.value.json();
          if (ratingData.status === 'OK') {
            ratingHistory = ratingData.result || [];
          }
        }

        setData({ userInfo, ratingHistory, loading: false, error: false });
      } catch {
        if (!cancelled) {
          setData({
            userInfo: FALLBACK_USER,
            ratingHistory: [],
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
