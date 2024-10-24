import { MovieCard } from "../MovieCard/MovieCard.component";
import { movies } from "../../../mock/mockdata";
import Image from "next/image";
import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel"

export const MainPage = () => {
    return (
        <>
            <Image
                src={'/darklogo.png'}
                alt="logo de la pagina"
                width={1200}
                height={400}
            />
            <Box>
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        img={movie.img}
                        description={movie.description}
                        rate={movie.rate}
                        id={movie.id}
                    />
                ))}
            </Box>
        </>
    );
};