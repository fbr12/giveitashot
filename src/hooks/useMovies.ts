"use client"

import { useState, useEffect } from 'react';

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
        const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
        try {
            const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
            );
            const data = await response.json();
            setMovies(data.results.slice(0, 50));
        } catch (err) {
            setError('Failed to fetch movies');
        } finally {
            setLoading(false);
        }
    };

    fetchMovies();
  }, []);

  return { movies, loading, error };
};

export default useMovies;