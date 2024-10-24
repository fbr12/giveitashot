"use client"

import { useState, useEffect } from 'react';

export const useTrendingMovies = () => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    const fetchTrendings = async () => {
      const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
      const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`);
      const data = await res.json();
      setTrendings(data.results);
    };

    fetchTrendings();
  }, []);

  return trendings;
};
