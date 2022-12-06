import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';

// const backgroundImage = 'https://musictech.com/wp-content/uploads/2021/01/spotify-airpods@1400x1050.jpg';
const backgroundImage = 'https://www.wallsauce.com/uploads/wallsauce-com/images/hero/cat/1049/645/music-speakers.jpg';
// const backgroundImage = 'https://images2.alphacoders.com/109/thumb-1920-1093974.jpg'; // New one?

const Background = styled(Box)({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    opacity: 0.5,
    zIndex: -2,
});

export default function BackgroundImage () {
    return (
            <Background sx={{backgroundImage: `url(${backgroundImage})`,backgroundPosition: 'center',}} />
    )
}