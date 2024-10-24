"use client"

import { Box, Container, Typography } from '@mui/material';
import Image from "next/image";
import Navbar from '../modules/Navbar/Navbar';
import dynamic from 'next/dynamic';
import GridMovies from '../modules/GridMovies/GridMovies';
import GridSeries from '../modules/GridSeries/GridSeries';
import { useTrendingMovies } from '../hooks/useTrendingMovies';
import { useTopMovies } from '../hooks/useTopMovies';
import { useTopSeries } from '../hooks/useTopSeries';

const Carousel = dynamic(() => import('../modules/Carousel/Carousel'), { ssr: false });

export default function Home() {
  const trendingMovies = useTrendingMovies();
  const topMovies = useTopMovies();
  const topSeries = useTopSeries();

  return (
    <Box sx={{ backgroundColor: '#181818', color: '#EAEAEA', minHeight: '100vh' }}>
      <Navbar />
      <Container>
        <Box sx={{ textAlign: 'center', my: 5 }}>
          <Image
                  src={'/darklogo.png'}
                  alt="logo de la pagina"
                  width={1000}
                  height={400}
              />
        </Box>
        <Box sx={{ my: 5 }}>
          <Typography variant="h4" gutterBottom>Trending Movies</Typography>
          <Carousel movies={trendingMovies} />
        </Box>
        <Box sx={{ my: 5 }}>
          <Typography variant="h4" gutterBottom>Top Movies</Typography>
          <GridMovies movies={topMovies} />
        </Box>
        <Box sx={{ my: 5 }}>
          <Typography variant="h4" gutterBottom>Top Series</Typography>
          <GridSeries series={topSeries} />
        </Box>
      </Container>
    </Box>
  );
}

