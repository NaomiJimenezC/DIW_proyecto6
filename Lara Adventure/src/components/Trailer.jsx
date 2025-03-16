import React from 'react';
import { Box, Typography } from '@mui/material';

const Trailer = ({ videoUrl }) => {
    return (
        <section>
            <Typography variant="h5" gutterBottom>
                Trailer de Mis Proyectos
            </Typography>
            <Box>
                <iframe
                    width="100%"
                    height="28.125rem" // 450px
                    src={videoUrl}
                    title="Video trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </Box>
        </section>
    );
};

export default Trailer;