import * as React from 'react';
import { AppBar, Typography, Box, Button, Toolbar } from '@material-ui/core';
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1, marginBottom: 20 }}>
            <AppBar position="static" >
                <Toolbar >

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Social App
                    </Typography>
                      <Link to="/auth">Login</Link> 
                </Toolbar>
            </AppBar>
        </Box>
    );
}
