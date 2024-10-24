'use client'

import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { styles } from './GridMovies.styles';

const GridMovies = ({ movies }) => {
  return (
    <Grid container spacing={3}>
      {movies.map((movie, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card sx={styles.card}>
            <CardMedia
              component="img"
              image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              sx={styles.cardImage}
            />
            <CardContent sx={styles.cardText}>
              <Typography variant="h6">{movie.title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridMovies;
