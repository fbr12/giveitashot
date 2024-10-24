import { Box, Typography } from "@mui/material";
import Image from "next/image";

export type MovieProps = {
    id: number;
    title: string;
    img: string;
    description: string;
    rate: number;
}

export const MovieCard = ({ title, img, description }: MovieProps) => {
    return (
        <Box>
            <Typography>{title}</Typography>
            <Image
                src={img}
                width={50}
                height={50}
                alt={`Poster of the movie ${title}`} 
            />
            <Typography>{description}</Typography>
        </Box>
    );
};