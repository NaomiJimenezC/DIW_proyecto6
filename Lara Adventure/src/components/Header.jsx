import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import logo from "../assets/logo/logos.svg";

const Header = () => {
    return (
        <header>
            <AppBar position="static" sx={{ backgroundColor: '#f6afca' }}>
                <Toolbar>
                    <img src={logo} alt="logo" style={{ pointerEvents: 'none' }} />
                </Toolbar>
            </AppBar>
        </header>
    );
};

export default Header;