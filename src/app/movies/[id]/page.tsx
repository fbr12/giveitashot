"use client"

import useMovieDetail from '@/hooks/useMovieDetails';
import { CircularProgress, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { useParams, useRouter } from 'next/navigation';
 

const MovieDetails = () => {
    const router = useRouter();
    const params = useParams<{id:string}>(); 
    const { movie, loading, error } = useMovieDetail(params.id as string);

  if (loading) return <CircularProgress />;
  if (error) return <Typography variant="h6">{error}</Typography>;

  if (!params.id) return null;


  return (
    <div>
      <Card sx={{backgroundImage:`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}}>
        <CardMedia
          sx={{height:'1200px',
               width:'800px'
          }}
          component="img"
          height="auto"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <CardContent>
          <Typography variant="h4">{movie.original_title}</Typography>
          <Typography variant="body1">{movie.overview}</Typography>
          <Typography variant="body2" color="textSecondary">
            Release Date: {movie.release_date}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Rating: {movie.vote_average}/10
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default MovieDetails;
