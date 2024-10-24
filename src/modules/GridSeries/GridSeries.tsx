'use client'

import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { styles } from './GridSeries.styles';

const GridSeries = ({ series }) => {
  return (
    <Grid container spacing={4}>
      {series.map((serie, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card sx={styles.card}>
            <CardMedia
              component="img"
              image={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
              alt={serie.name}
              sx={styles.cardImage}
            />
            <CardContent sx={styles.cardText}>
              <Typography variant="h6">{serie.name}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridSeries;
