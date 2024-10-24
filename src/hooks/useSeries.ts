"use client"

import { useState, useEffect } from 'react';

const useSeries = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSeries = async () => {
        const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
        try {
            const response = await fetch(
            `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
            );
            const data = await response.json();
            setSeries(data.results.slice(0, 50));
        } catch (err) {
            setError('Failed to fetch series');
        } finally {
            setLoading(false);
        }
    };

    fetchSeries();
  }, []);

  return { series, loading, error };
};

export default useSeries;