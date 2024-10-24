'use client';
import { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styles } from './Carousel.styles';
import { movies as moviesMock } from '../../../mock/mockdata';


const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrev = () => {
      const newIndex = currentIndex === 0 ? moviesMock.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const handleNext = () => {
      const newIndex = currentIndex === moviesMock.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    return (
      <Box sx={styles.carouselContainer}>
        <Box>
            <IconButton onClick={handlePrev} sx={styles.arrowButton}>
            <ArrowBackIosNewIcon />
            </IconButton>
        </Box>
        
        <Box sx={styles.slider}>
          {moviesMock.map((movie, index) => (
            <Box
              key={movie.title}
              sx={{
                ...styles.slide,
                transform: `translateX(${(index - currentIndex) * 100}%)`,
              }}
            >
              <img src={movie.img} alt={movie.title} style={styles.image} />
            </Box>
          ))}
        </Box>
        <Box>
            <IconButton onClick={handleNext} sx={styles.arrowButton}>
            <ArrowForwardIosIcon />
            </IconButton>
        </Box>
  
      </Box>
    );
  };
  
export default Carousel;

