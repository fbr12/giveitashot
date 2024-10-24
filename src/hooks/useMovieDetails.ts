'use client'

import { useState, useEffect } from 'react';

const useMovieDetail = (movieId: string) => {
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetail = async (movieId: string) => {
        const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;  
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
            const data = await response.json();
            setMovie(data);
        } catch (err) {
            setError('Failed to fetch movie details');
        } finally {
            setLoading(false);
        }
    };

    if (movieId) {
        fetchMovieDetail(movieId);
    }
  }, [movieId]);

    return { movie, loading, error };
};

export default useMovieDetail;