import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    imageContainer: {
        width: '100%',
        height: 'auto',
        borderRadius: '0.5rem', // 8px
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 'auto',
        display: 'block',
    },
    textContainer: {
        padding: '1rem 0',
    },
}));

const InfoSection = ({ image, text, sources, alt = 'Proyecto' }) => {
    const classes = useStyles();

    return (
        <article>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <div className={classes.imageContainer}>
                        <picture>
                            {sources?.map((source, index) => (
                                <source
                                    key={index}
                                    type={source.type}
                                    srcSet={source.src}
                                />
                            ))}
                            <img
                                src={image}
                                alt={alt}
                                className={classes.image}
                            />
                        </picture>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box className={classes.textContainer}>
                        <Typography variant="h6" gutterBottom>
                            Descripción del Proyecto
                        </Typography>
                        <Typography variant="body1">
                            {text}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </article>
    );
};

export default InfoSection;