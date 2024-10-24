"use client"

import { useState, useEffect } from 'react';

export const useTopMovies = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const fetchTopMovies = async () => {
      const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
      const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`);
      const data = await res.json();
      setTopMovies(data.results);
    };

    fetchTopMovies();
  }, []);

  return topMovies;
};
