"use client"

import { useState, useEffect } from 'react';

export const useTopSeries = () => {
  const [topSeries, setTopSeries] = useState([]);

  useEffect(() => {
    const fetchTopSeries = async () => {
      const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
      const res = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`);
      const data = await res.json();
      setTopSeries(data.results);
    };

    fetchTopSeries();
  }, []);

  return topSeries;
};
