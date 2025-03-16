import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Link
} from '@mui/material';
import { Facebook, Twitter, LinkedIn, GitHub } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer>
            <AppBar position="static" sx={{backgroundColor: '#d51c5a'}}>
                <Toolbar>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                        © {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.
                    </Typography>
                    <div style={{ flexGrow: 1 }} />
                    <IconButton color="inherit">
                        <Link href="https://facebook.com" color="inherit" underline="none">
                            <Facebook />
                        </Link>
                    </IconButton>
                    <IconButton color="inherit">
                        <Link href="https://twitter.com" color="inherit" underline="none">
                            <Twitter />
                        </Link>
                    </IconButton>
                    <IconButton color="inherit">
                        <Link href="https://linkedin.com" color="inherit" underline="none">
                            <LinkedIn />
                        </Link>
                    </IconButton>
                    <IconButton color="inherit">
                        <Link href="https://github.com" color="inherit" underline="none">
                            <GitHub />
                        </Link>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </footer>
    );
};

export default Footer;