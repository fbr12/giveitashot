"use client"

import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CircularProgress } from '@mui/material';
import Navbar from '@/modules/Navbar/Navbar';
import useSeries from '@/hooks/useSeries';

const SeriesPage = () => {
  const { series, loading, error } = useSeries();

  if (loading) return <CircularProgress />;
  if (error) return <Typography variant="h6">{error}</Typography>;

  return (
    <div>
      <Navbar/>
      <Typography variant="h3" gutterBottom>
        Popular Series
      </Typography>
      <Grid container spacing={3}>
        {series.map((tv) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={tv.id}>
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                alt={tv.name}
              />
              <CardContent>
                <Typography variant="h6">{tv.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {tv.first_air_date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SeriesPage;