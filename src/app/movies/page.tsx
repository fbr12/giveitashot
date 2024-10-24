"use client"

import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CircularProgress } from '@mui/material';
import Navbar from '@/modules/Navbar/Navbar';
import Link from 'next/link';
import useMovies from '@/hooks/useMovies';

const MoviesPage = () => {
  const { movies, loading, error } = useMovies();

  if (loading) return <CircularProgress />;
  if (error) return <Typography variant="h6">{error}</Typography>;

  return (
    <div>
      <Navbar/>  
      <Typography variant="h3" gutterBottom>
        Popular Movies
      </Typography>
      <Grid container spacing={3}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <Link href={`/movies/${movie.id}`} passHref>
                <Card>
                    <CardMedia
                        component="img"
                        height="350"
                        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        />
                    <CardContent>
                        <Typography variant="h6">{movie.title}</Typography>
                        <Typography variant="body2" color="textSecondary">
                        {movie.release_date}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MoviesPage;