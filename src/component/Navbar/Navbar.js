import * as React from 'react';
import { AppBar, Typography, Box, Button, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    const [user, setUser] = React.useState(localStorage.getItem("profile"))
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
        navigate("/auth");
    }
    return (
        <Box sx={{ flexGrow: 1, marginBottom: 20 }}>
            <AppBar position="static" >
                <Toolbar >

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Social App
                    </Typography>

                    {
                        user ?

                            <Button variant="contained" onClick={handleLogout}> Logout </Button>
                            :

                            <Button variant="contained">  <Link to="/auth">Login</Link> </Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}
